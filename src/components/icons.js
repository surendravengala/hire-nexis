import {
  ArrowLeftRight,
  BadgeCheck,
  Briefcase,
  ClipboardList,
  Cog,
  Handshake,
  HeartPulse,
  Landmark,
  Layers,
  Monitor,
  Network,
  ShoppingBag,
  Target,
  Users,
} from 'lucide-react';

export const iconMap = {
  Users,
  Briefcase,
  ArrowLeftRight,
  Network,
  Monitor,
  Cog,
  Landmark,
  HeartPulse,
  ShoppingBag,
  ClipboardList,
  BadgeCheck,
  Target,
  Layers,
  Handshake,
};

export function getIcon(name, fallback = Briefcase) {
  return iconMap[name] || fallback;
}
