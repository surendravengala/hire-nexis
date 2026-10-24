import ServiceDetail from './ServiceDetail';
import { services } from '../config/siteData';

export default function RPO() {
  const service = services.find((item) => item.id === 'rpo');
  return <ServiceDetail service={service} />;
}
