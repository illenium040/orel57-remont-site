import * as React from 'react';
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ISectionInfo } from './NavMenu';
import * as Icons from '@fortawesome/free-solid-svg-icons';

export const CompanyName = () =>
    (<div className="company-name"> Орёл57 {<FontAwesomeIcon icon={faTools} />} Ремонт </div>);


export const sections = {
    heroArea: { id: "hero-area", icon: Icons.faHome, value: "Главная" } as ISectionInfo,
    services: { id: "services", icon: Icons.faCogs, value: "Услуги" } as ISectionInfo,
    portfolio: { id: "porfolio", icon: Icons.faImage, value: "Фото" } as ISectionInfo,
    about: { id: "about", icon: Icons.faInfo, value: "О нас" } as ISectionInfo,
    contacts: { id: "contacts", icon: Icons.faEnvelope, value: "Контакты" } as ISectionInfo
};