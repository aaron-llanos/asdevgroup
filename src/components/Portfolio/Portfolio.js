'use client';

import './page.scss'

import Link from 'next/link'

import { useEffect, useState } from 'react';

import Button from '@/components/Button/Button';

import { useSearchParams } from 'next/navigation'
import { properties as propertiesUS, propertiesMX } from '@/helpers/properties';
import { dynamicClass } from '@/helpers/dynamic-class';

export default function Portfolio({ isMX }) {
  const searchParams = useSearchParams()
  const filterParam = searchParams.get('filter')
  const properties = isMX ? propertiesMX : propertiesUS;

  const initialQueryParam = (filterParam) => {
    const cases = {
      multifamily: 'Multifamily',
      hospitality: 'Hospitality',
      'self-storage': 'Self-Storage',
    };

    return cases[filterParam];
  };

  const [currentType, setCurrentType] = useState(filterParam ? initialQueryParam(filterParam) : 'all');
  const [currentProgress, setCurrentProgress] = useState('all');
  const [currentProperty, setCurrentProperty] = useState(properties[0]);
  const [flash, setflash] = useState(false);
  const [zoom, setZoom] = useState(false);

  const filterProperties = () => {
    let concatProperties = []

    if (currentType === 'all') {
      concatProperties.push(...properties)
    } else {
      const filterType =
        properties.filter(property => property.type === currentType)
      concatProperties.push(...filterType)
    }

    if (currentProgress !== 'all') {
      const filterProgress = concatProperties.filter(property =>
        property.status === currentProgress)
      concatProperties = filterProgress
    }

    return concatProperties
  }

  useEffect(() => {
    filterProperties()
  }, [currentType, currentProgress]);

  const hoverProperty = (property) => {
    setCurrentProperty(property)
    setZoom(true)
    if (property.id !== currentProperty.id) {
      setflash(true)
    }
  }

  const deleteFlash = () => {
    if (flash) {
      setflash(false)
    }
  }

  return (
    <section
      className={`portfoliocomp ${dynamicClass(zoom, 'zoom')}`}
      // className={`portfoliocomp zoom`}
      style={{ backgroundImage: `url(/inside/${currentProperty.id}-${currentProperty.slug}/${currentProperty.image})`}}
    >
      {flash && (<div className="flash"></div>)}

      {/* {isMX ? (
        <h1>Located in Mexico’s most luxurious and prestigious areas</h1>
      ) : (
        <h1>Our developments are built in the most attractive areas in Florida</h1>
      )} */}

      {!isMX && (
        <div className="filter">
          <div className="filter-row">
            <p>FILTER:</p>
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
              key={key}
              onMouseLeave={deleteFlash}
              onMouseEnter={() => hoverProperty(property)}
              className={`card ${dynamicClass(property.id === currentProperty.id, 'bg-card')}`}
            >
              <p className="title">{property.name}</p>
              <p className="city">{property.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
