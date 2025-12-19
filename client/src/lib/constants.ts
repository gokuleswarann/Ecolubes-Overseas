import heroImage from '@assets/stock_images/industrial_port_ship_fa42aa8a.jpg';
import logo from '@assets/image_1766152637296.png';

// Industrial Solvents
import hexane from '@assets/stock_images/clear_industrial_sol_8914e975.jpg';
import toluene from '@assets/stock_images/toluene_aromatic_sol_b2076505.jpg';
import xylene from '@assets/stock_images/xylene_chemical_solv_0741a26a.jpg';
import mixSolvents from '@assets/stock_images/industrial_solvent_m_fd3b94a3.jpg';
import thinner from '@assets/stock_images/paint_thinner_solven_07a4ac40.jpg';

// Petroleum Products
import baseOil from '@assets/stock_images/base_oil_mineral_oil_caed5dfb.jpg';
import sn500 from '@assets/stock_images/sn_500_base_oil_heav_b15e65d1.jpg';
import sn150 from '@assets/stock_images/sn_150_base_oil_ligh_848be6e7.jpg';
import lubricantOil from '@assets/stock_images/lubricant_motor_oil__e4ebb4c2.jpg';
import grease from '@assets/stock_images/industrial_grease_lu_5a7edcbf.jpg';
import bitumen from '@assets/stock_images/bitumen_asphalt_pavi_52e9cbfe.jpg';

// Textile Chemicals
import peg from '@assets/stock_images/peg_polyethylene_gly_53bbe44d.jpg';

export const COMPANY_CONFIG = {
  name: "Ecolubes Overseas",
  logoUrl: logo,
  email: "sales@ecolubesoverseas.com",
  phone: "+971 4 123 4567",
  address: "Business Bay, Dubai, UAE",
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
    image: peg,
    tags: ["Textile Chemical", "Polyethylene Glycol", "Industrial"],
    description: "Polyethylene glycol 400 for textile, cosmetic, and pharmaceutical applications."
  },
  {
    id: 13,
    category: "Textile Chemicals",
    name: "PEG 200",
    image: peg,
    tags: ["Textile Chemical", "Polyethylene Glycol", "Industrial"],
    description: "Polyethylene glycol 200 with lower viscosity for specialized chemical processes."
  },
  {
    id: 14,
    category: "Textile Chemicals",
    name: "PEG 600",
    image: peg,
    tags: ["Textile Chemical", "Polyethylene Glycol", "Industrial"],
    description: "Polyethylene glycol 600 for enhanced lubricity and processing efficiency."
  }
];

export const HERO_IMAGE = heroImage;
