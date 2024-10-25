'use client';

//components/Portfolio/Portfolio.js
import './page.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import { useSearchParams } from 'next/navigation';
import { dynamicClass } from '@/helpers/dynamic-class';
import { API_URL } from '@/app/config';

export default function Portfolio({ isMX }) {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get('filter');
  const [loading, setLoading] = useState(true);

  const [properties, setProperties] = useState([]);
  const [currentType, setCurrentType] = useState('all');
  const [currentProgress, setCurrentProgress] = useState('all');
  const [currentProperty, setCurrentProperty] = useState(null);
  const [flash, setFlash] = useState(false);
  const [zoom, setZoom] = useState(false);

  const fetchProperties = async () => {
    try {
      const countryFilter = isMX ? 'MX' : 'US'; // Filtrar según el país
      const res = await fetch(`${API_URL}/api/propiedades?populate[Gallery][fields][0]=url&populate[imageMobileSlider][fields][0]=url&populate[TitlePageSliderDesktop][fields][0]=url&filters[Country]=${countryFilter}&sort=createdAt:desc`);
      const data = await res.json();
      const fetchedProperties = data.data; // Ajusta la estructura según el formato de respuesta de la API
      setProperties(fetchedProperties);
      setCurrentProperty(fetchedProperties[0]); // Configurar la primera propiedad como la seleccionada por defecto
      
    } catch (error) {
      console.error('Error fetching properties:', error);
      
    }
  };

  useEffect(() => {
   const fetchData = async () => {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 900));
      setLoading(false)
    };
    fetchData();
    fetchProperties();
    
  }, [isMX]); // Dependencia de isMX para que se vuelva a cargar cuando cambie


  if (loading) {
    return (
      <section className="portfoliocomp-loading">
        <div className="filter-loading">
          <div className="skeleton skeleton-filter-button pulse"></div>
          <div className="skeleton skeleton-filter-button pulse"></div>
          <div className="skeleton skeleton-filter-button pulse"></div>
          <div className="skeleton skeleton-filter-button pulse"></div>
        </div>
        <div className="filter-loading">
          <div className="skeleton skeleton-filter-button pulse"></div>
          <div className="skeleton skeleton-filter-button pulse"></div>
          <div className="skeleton skeleton-filter-button pulse"></div>
          
        </div>

        <div className="grid-loading">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="skeleton skeleton-card pulse"></div>
          ))}
        </div>
      </section>
    );
  }
  const filterProperties = () => {
    let filteredProperties = properties;

    if (currentType !== 'all') {
      filteredProperties = filteredProperties.filter(property => property.Type === currentType);
    }

    if (currentProgress !== 'all') {
      filteredProperties = filteredProperties.filter(property => property.Stage === currentProgress);
    }

    return filteredProperties;
  };

  const hoverProperty = (property) => {
    setCurrentProperty(property);
    setZoom(true);
    if (property.id !== currentProperty?.id) {
      setFlash(true);
    }
  };

  const deleteFlash = () => {
    if (flash) {
      setFlash(false);
    }
  };

  return (
    <section
      className={`portfoliocomp ${dynamicClass(zoom, 'zoom')}`}
      style={{
        backgroundImage: currentProperty
          ? `url(${API_URL}/${currentProperty.TitlePageSliderDesktop?.url})`
          : 'none'
      }}
    >
      {flash && (<div className="flash"></div>)}

      {!isMX && (
        <div className="filter">
          <p>FILTER:</p>
          <div className="filter-row">
            <Button
              text="All"
              css={dynamicClass(currentType === 'all', 'bg-red')}
              click={() => setCurrentType('all')}
            />
            <Button
              text="Multifamily"
              css={dynamicClass(currentType === 'Multifamily', 'bg-red')}
              click={() => setCurrentType('Multifamily')}
            />
            <Button
              text="Hospitality"
              css={dynamicClass(currentType === 'Hospitality', 'bg-red')}
              click={() => setCurrentType('Hospitality')}
            />
            <Button
              text="Self-Storage"
              css={dynamicClass(currentType === 'Self-Storage', 'bg-red')}
              click={() => setCurrentType('Self-Storage')}
            />
          </div>

          <div className="filter-row" style={{ maxWidth: '462px' }}>
            <Button
              text="All"
              css={dynamicClass(currentProgress === 'all', 'bg-red')}
              click={() => setCurrentProgress('all')}
            />
            <Button
              text="In Progress"
              css={dynamicClass(currentProgress === 'in-process', 'bg-red')}
              click={() => setCurrentProgress('in-process')}
            />
            <Button
              text="Completed"
              css={dynamicClass(currentProgress === 'completed', 'bg-red')}
              click={() => setCurrentProgress('completed')}
            />
          </div>
        </div>
      )}

      <div className="grid">
        {filterProperties().map((property, key) => (
          <Link
            key={key}
            href={isMX
              ? `/inside/mx/${property.slug}`
              : `/inside/us/${property.slug}`
            }
          >
            <div
              onMouseLeave={deleteFlash}
              onMouseEnter={() => hoverProperty(property)}
              className={`card ${dynamicClass(property.id === currentProperty?.id, 'bg-card')}`}
            >
              <p className="title">{property.Name}</p>
              <p className="city">{property.Location}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
