import { LucideIcon } from 'lucide-react';

export interface TimelineItem {
  id: number;
  location: string;
  description: string;
  activities: string[];
  icon: LucideIcon;
  image: string;
  isOptional?: boolean;
}

export interface RuleItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  name: string;
  phones: string[];
}