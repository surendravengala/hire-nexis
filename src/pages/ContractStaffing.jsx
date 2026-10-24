import ServiceDetail from './ServiceDetail';
import { services } from '../config/siteData';

export default function ContractStaffing() {
  const service = services.find((item) => item.id === 'contract-staffing');
  return <ServiceDetail service={service} />;
}
