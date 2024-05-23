"use client";

import './page.scss'

import Link from 'next/link'

import { useEffect, useState } from 'react';

import Menu from '@/components/Menu/Menu';
import Button from '@/components/Button/Button';

import { properties } from '@/helpers/properties';
import { dynamicClass } from '@/helpers/dynamic-class';

export default function portfolio() {
  const [currentType, setCurrentType] = useState('all');
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
    <Menu>
      <section
        className={`home ${dynamicClass(zoom, 'zoom')}`}
        style={{ backgroundImage: `url(/home/slider/${currentProperty.image})`}}
      >
        {flash && (<div className="flash"></div>)}

        <h1>Our developments are built in the most attractive areas in Florida</h1>

        <div className="filter">
          <div className="filter-row">
            <p>FILTER:</p>
            <Button
              text="All"
              css={dynamicClass(currentType === 'all', 'bg-red')}
              click={() => setCurrentType('all')}
            />
            <Button
              text="Multi-family"
              css={dynamicClass(currentType === 'Multi-family', 'bg-red')}
              click={() => setCurrentType('Multi-family')}
            />
            <Button
              text="Mixed-Use"
              css={dynamicClass(currentType === 'mixed', 'bg-red')}
              click={() => setCurrentType('mixed')}
            />
            <Button
              text="Hospitality"
              css={dynamicClass(currentType === 'Hospitality', 'bg-red')}
              click={() => setCurrentType('Hospitality')}
            />
            <Button
              text="Residential"
              css={dynamicClass(currentType === 'Residential', 'bg-red')}
              click={() => setCurrentType('Residential')}
            />
            <Button
              text="Industrial"
              css={dynamicClass(currentType === 'Industrial', 'bg-red')}
              click={() => setCurrentType('Industrial')}
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

        <div className="grid">
          {filterProperties().map((property, key) => (
            <Link href={`/inside/${property.slug}`}>
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
    </Menu>
  );
}
