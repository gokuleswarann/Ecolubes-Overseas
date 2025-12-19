import heroImage from '@assets/stock_images/industrial_port_ship_fa42aa8a.jpg';
import product1 from '@assets/stock_images/golden_engine_oil_cl_c35e9284.jpg';
import product2 from '@assets/stock_images/amber_darker_industr_9e510456.jpg';
import product3 from '@assets/stock_images/blue_industrial_oil__ce21dabe.jpg';
import product4 from '@assets/stock_images/black_bitumen_asphal_d66fbc03.jpg';
import product5 from '@assets/stock_images/dark_heavy_fuel_oil__9b1c97a7.jpg';
import product6 from '@assets/stock_images/petrochemical_refine_b9f936ad.jpg';
import logo from '@assets/generated_images/minimalist_oil_drop_logo.png';

export const COMPANY_CONFIG = {
  name: "Ecolubes Overseas",
  logoUrl: logo,
  email: "sales@ecolubesoverseas.com",
  phone: "+971 4 123 4567",
  address: "Business Bay, Dubai, UAE",
  description: "Premium Industrial Oils & Bitumen Export from Dubai to the World."
};

export const PRODUCTS = [
  {
    id: 1,
    name: "Virgin Base Oil SN 150",
    image: product1,
    tags: ["Light Grade", "Industrial", "Virgin"],
    description: "High quality Virgin Base Oil SN 150 for various industrial applications."
  },
  {
    id: 2,
    name: "Virgin Base Oil SN 500",
    image: product2,
    tags: ["Heavy Grade", "Industrial", "Virgin"],
    description: "Premium Virgin Base Oil SN 500 with excellent viscosity characteristics."
  },
  {
    id: 3,
    name: "Recycled Base Oil SN 150",
    image: product3,
    tags: ["Eco-Friendly", "Recycled", "Cost-Effective"],
    description: "Sustainable Recycled Base Oil SN 150, refined to high standards."
  },
  {
    id: 4,
    name: "Bitumen 60/70",
    image: product4,
    tags: ["Construction", "Paving", "Heavy Duty"],
    description: "Standard penetration grade Bitumen 60/70 for road construction and paving."
  },
  {
    id: 5,
    name: "Fuel Oil CST 180",
    image: product5,
    tags: ["Marine Fuel", "Power Generation", "Heavy Fuel"],
    description: "High-grade Fuel Oil CST 180 suitable for marine engines and power plants."
  },
  {
    id: 6,
    name: "Industrial Solvents",
    image: product6,
    tags: ["Chemical", "Cleaning", "Processing"],
    description: "Wide range of industrial solvents for manufacturing and cleaning processes."
  }
];

export const HERO_IMAGE = heroImage;
