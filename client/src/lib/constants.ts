import heroImage from '@assets/stock_images/industrial_port_ship_fa42aa8a.jpg';
import logo from '@assets/image_1766152637296.png';

// Industrial Solvents
import hexane from '@assets/stock_images/hexane_lab_bottle_updated.png';
import toluene from '@assets/stock_images/toluene_lab_bottle_custom.png';
import xylene from '@assets/stock_images/xylene_lab_bottle_custom.png';
import mixSolvents from '@assets/stock_images/industrial_solvent_m_fd3b94a3.jpg';
import thinner from '@assets/stock_images/thinner_bottle_custom.png';

// Petroleum Products
import baseOil from '@assets/stock_images/golden_mineral_base__29b65f6c.jpg';
import sn500 from '@assets/stock_images/sn500_base_oil_custom.png';
import sn150 from '@assets/stock_images/sn_150_light_grade_b_91941e3e.jpg';
import lubricantOil from '@assets/stock_images/motor_lubricant_engi_ad1e5933.jpg';
import grease from '@assets/stock_images/industrial_bearing_g_a2b1013b.jpg';
import bitumen from '@assets/stock_images/bitumen_asphalt_pavi_52e9cbfe.jpg';

// Textile Chemicals
import peg200 from '@assets/stock_images/peg_200_chemical_com_e3b021c6.jpg';
import peg400 from '@assets/stock_images/peg_400_polyethylene_83b4268b.jpg';
import peg600 from '@assets/stock_images/peg_600_viscous_chem_ae206a2d.jpg';

export const COMPANY_CONFIG = {
  name: "Ecolube Overseas",
  logoUrl: logo,
  email: "mohammedbasha@ecolubeoverseas.com",
  phone: "+971 4 123 4567",
  address: "E-11 F-10 Hamriyah Free Zone, Sharjah",
  description: "Premium Industrial Solvents & Petroleum Products Export from Dubai to the World."
};

export const PRODUCTS = [
  // Industrial Solvents
  {
    id: 1,
    category: "Industrial Solvents",
    name: "Hexane",
    image: hexane,
    tags: ["Solvent", "Chemical", "Industrial"],
    description: "High-purity hexane for use in extraction, cleaning, and manufacturing processes."
  },
  {
    id: 2,
    category: "Industrial Solvents",
    name: "Toluene",
    image: toluene,
    tags: ["Aromatic Solvent", "Chemical", "Industrial"],
    description: "Premium toluene for paints, coatings, adhesives, and chemical synthesis."
  },
  {
    id: 3,
    category: "Industrial Solvents",
    name: "Xylene",
    image: xylene,
    tags: ["Solvent", "Chemical", "Industrial"],
    description: "Mixed xylene solution used in printing, painting, and chemical manufacturing."
  },
  {
    id: 4,
    category: "Industrial Solvents",
    name: "Mix Solvents",
    image: mixSolvents,
    tags: ["Custom Blend", "Solvent", "Industrial"],
    description: "Customized solvent blends for specific industrial applications and requirements."
  },
  {
    id: 5,
    category: "Industrial Solvents",
    name: "Thinner",
    image: thinner,
    tags: ["Paint Thinner", "Chemical", "Industrial"],
    description: "Professional-grade paint thinner for dilution and surface preparation."
  },

  // Petroleum Products
  {
    id: 6,
    category: "Petroleum Products",
    name: "Base Oil",
    image: baseOil,
    tags: ["Mineral Oil", "Petroleum", "Industrial"],
    description: "High-quality mineral base oil for lubricants and industrial applications."
  },
  {
    id: 7,
    category: "Petroleum Products",
    name: "SN 500",
    image: sn500,
    tags: ["Heavy Grade", "Petroleum", "Lubricant"],
    description: "Premium SN 500 grade base oil with high viscosity for heavy-duty applications."
  },
  {
    id: 8,
    category: "Petroleum Products",
    name: "SN 150",
    image: sn150,
    tags: ["Light Grade", "Petroleum", "Lubricant"],
    description: "SN 150 grade base oil with excellent fluidity for light industrial use."
  },
  {
    id: 9,
    category: "Petroleum Products",
    name: "Lubricant Oil",
    image: lubricantOil,
    tags: ["Engine Oil", "Petroleum", "Lubricant"],
    description: "High-performance motor oil for automotive and industrial engine lubrication."
  },
  {
    id: 10,
    category: "Petroleum Products",
    name: "Grease",
    image: grease,
    tags: ["Lubricant", "Petroleum", "Industrial"],
    description: "Industrial-grade multipurpose grease for bearings and mechanical components."
  },
  {
    id: 11,
    category: "Petroleum Products",
    name: "Bitumen",
    image: bitumen,
    tags: ["Construction", "Petroleum", "Paving"],
    description: "Premium bitumen for road construction, waterproofing, and paving applications."
  },

  // Textile Chemicals
  {
    id: 12,
    category: "Textile Chemicals",
    name: "PEG 400",
    image: peg400,
    tags: ["Textile Chemical", "Polyethylene Glycol", "Industrial"],
    description: "Polyethylene glycol 400 for textile, cosmetic, and pharmaceutical applications."
  },
  {
    id: 13,
    category: "Textile Chemicals",
    name: "PEG 200",
    image: peg200,
    tags: ["Textile Chemical", "Polyethylene Glycol", "Industrial"],
    description: "Polyethylene glycol 200 with lower viscosity for specialized chemical processes."
  },
  {
    id: 14,
    category: "Textile Chemicals",
    name: "PEG 600",
    image: peg600,
    tags: ["Textile Chemical", "Polyethylene Glycol", "Industrial"],
    description: "Polyethylene glycol 600 for enhanced lubricity and processing efficiency."
  }
];

export const HERO_IMAGE = heroImage;
