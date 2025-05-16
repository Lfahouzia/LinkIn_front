// Types pour les utilisateurs
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  location?: string;
  bio?: string;
  avatar?: string;
  role: "entrepreneur" | "investor" | "mentor";
  skills: string[];
  interests: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Types pour les projets
export interface Project {
  id: string;
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  impact?: string;
  category: string;
  status: "draft" | "published" | "funded";
  fundingRequired: number;
  fundingObtained: number;
  images: string[];
  documents: Document[];
  owner: User;
  team: TeamMember[];
  views: number;
  favorites: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Document {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
  uploadedAt: Date;
}

export interface TeamMember {
  id: string;
  user: User;
  role: string;
  joinedAt: Date;
}

// Types pour les statistiques
export interface StatisticItem {
  label: string;
  value: number;
  change: number;
  icon?: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
    fill?: boolean;
  }[];
}

export interface Activity {
  id: string;
  type: "message" | "connection" | "investment" | "project";
  user: User;
  project?: Project;
  amount?: number;
  createdAt: Date;
}

export interface Task {
  id: string;
  title: string;
  date: Date;
  priority: "high" | "medium" | "low";
  completed: boolean;
}

// Types pour les filtres
export interface Filter {
  period: "week" | "month" | "quarter" | "year";
  category: "all" | "projects" | "investments" | "connections";
  status?: "all" | "draft" | "published" | "funded";
}
