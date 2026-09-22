import {
  ArrowUpRight,
  Check,
  Compass,
  Database,
  Gauge,
  Handshake,
  List,
  Plug,
  ShieldCheck,
  Stack,
  Terminal,
  X,
} from "@phosphor-icons/react/dist/ssr";

type IconProps = { className?: string };

export function IconLayers({ className }: IconProps) {
  return <Stack className={className} weight="regular" />;
}

export function IconPlug({ className }: IconProps) {
  return <Plug className={className} weight="regular" />;
}

export function IconCompass({ className }: IconProps) {
  return <Compass className={className} weight="regular" />;
}

export function IconShield({ className }: IconProps) {
  return <ShieldCheck className={className} weight="regular" />;
}

export function IconTerminal({ className }: IconProps) {
  return <Terminal className={className} weight="regular" />;
}

export function IconGauge({ className }: IconProps) {
  return <Gauge className={className} weight="regular" />;
}

export function IconHandshake({ className }: IconProps) {
  return <Handshake className={className} weight="regular" />;
}

export function IconDatabase({ className }: IconProps) {
  return <Database className={className} weight="regular" />;
}

export function IconArrowUpRight({ className }: IconProps) {
  return <ArrowUpRight className={className} weight="regular" />;
}

export function IconCheck({ className }: IconProps) {
  return <Check className={className} weight="bold" />;
}

export function IconX({ className }: IconProps) {
  return <X className={className} weight="bold" />;
}

export function IconMenu({ className }: IconProps) {
  return <List className={className} weight="regular" />;
}

export function IconClose({ className }: IconProps) {
  return <X className={className} weight="regular" />;
}
