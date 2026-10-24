import ServiceDetail from './ServiceDetail';
import { services } from '../config/siteData';

export default function PermanentStaffing() {
  const service = services.find((item) => item.id === 'permanent-staffing');
  return <ServiceDetail service={service} />;
}
