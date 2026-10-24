import ServiceDetail from './ServiceDetail';
import { services } from '../config/siteData';

export default function C2HStaffing() {
  const service = services.find((item) => item.id === 'c2h-staffing');
  return <ServiceDetail service={service} />;
}
