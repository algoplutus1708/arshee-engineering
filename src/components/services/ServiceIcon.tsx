import {
  Compass,
  Cpu,
  FileText,
  Gauge,
  ShieldCheck,
  Wrench,
  type LucideProps,
} from "lucide-react";
import type { ServiceIconKey } from "@/data/services";

const iconMap = {
  gauge: Gauge,
  "shield-check": ShieldCheck,
  "file-text": FileText,
  wrench: Wrench,
  compass: Compass,
  cpu: Cpu,
} as const;

interface ServiceIconProps extends LucideProps {
  iconKey: ServiceIconKey;
}

/**
 * Renders the appropriate Lucide icon for a given service key.
 */
export function ServiceIcon({ iconKey, ...props }: ServiceIconProps) {
  const Icon = iconMap[iconKey];
  return <Icon {...props} />;
}
