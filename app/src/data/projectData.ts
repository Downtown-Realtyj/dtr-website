import type { Project } from "../types/property";

export const projects: Project[] = [
    {
        slug: "highline-tower",
        name: "Highline Tower",
        developer: "R.R. Builders",
        status: "ongoing",
        reraNo: "BRERAP195728070226290929E00",
        locality: "Lakhnibigha, Khagaul",
        city: "Patna",
        state: "Bihar",
        builtUpArea: "18968.05 Sq.Mtr.",
        structure: "2 Block - B+G+15",
        summary: "R. R. Highline Tower is a residential apartment project by R. R. Builders and Infracon, located at Lakhnibigha near DRM Office, Khagaul, Danapur, Patna. The project offers a contemporary high-rise residential experience with landscaped green spaces, a swimming pool, indoor sports facilities and a wide range of lifestyle amenities.",
        highlights: [
            "Located at Lakhnibigha, near DRM Office, Khagaul, Danapur",
            "Approximately 1.5 km from Danapur Railway Station",
            "Approximately 4.5 km from Saguna More",
            "Floor plans featuring a first-floor podium and typical floors from the 2nd to 14th floors"
        ],
        amenities: [
            "Swimming Pool",
            "Indoor Sports Area",
            "Health Club",
            "Gymnasium",
            "Jogging Track",
            "Badminton Court",
            "Indoor Games Area",
            "Kids Play Zone",
            "Terrace Garden",
            "Landscaped Green Area",
            "Multipurpose Hall",
            "24x7 Water Supply",
            "24x7 Power Backup",
            "Visitor Car Parking",
            "Fire Safety",
            "Security and Digital Access Monitoring",
            "Lifts",
            "Electric Car Charging Points at Selected Spots"
        ],
        spaces: [
            {
                kind: "residential",
                type: "2BHK Flats",
                units: 72,
                carpetAreas: ["700 Sq.Ft.", "835 Sq.Ft."]
            },
            {
                kind: "residential",
                type: "3BHK Flats",
                units: 72,
                carpetAreas: ["980 Sq.Ft.", "1020 Sq.Ft.", "1086 Sq.Ft."]
            }
        ],
        featured: true,
    },
    {
        slug: "grand-sapphire",
        name: "Grand Sapphire",
        developer: "Deep Sheetal Engineers Pvt. Ltd.",
        status: "ongoing",
        reraNo: "BRERAP00527-005/22/R-1680/2024",
        locality: "Danapur-Khagaul Road",
        city: "Patna",
        state: "Bihar",
        builtUpArea: "5462.71 Sq.Mtr.",
        structure: "B+G+8",
        summary: "Grand Sapphire is a residential-cum-commercial development by Deep Sheetal Engineers Pvt. Ltd., located in the Danapur-Khagaul Road area of Patna. The project features residential apartments and ground-floor commercial shops, complemented by a terrace garden, landscaped spaces, parking and modern lifestyle amenities.",
        highlights: [
            "Residential apartments with ground-floor commercial shops",
            "Approximately 1.5 km from Saguna More",
            "Approximately 4.5 km from Danapur Railway Station",
            "GD Goenka School approximately 0.2 km away",
            "AIIMS Patna approximately 8.5 km away",
            "Patna Airport approximately 8.7 km away"
        ],
        amenities: [
            "Terrace Garden",
            "Rainwater Harvesting",
            "Ample Parking",
            "24x7 Electricity",
            "24x7 Water Supply",
            "Kids Zone",
            "Outdoor Gymnasium",
            "24x7 CCTV Surveillance",
            "Eco-Friendly Campus",
            "Fire-Fighting System",
            "Silent DG Set",
            "Intercom",
            "Gas Pipeline",
            "Vastu-Oriented Design",
            "ISI Lift",
            "Owned Transformer"
        ],
        spaces: [
            {
                kind: "residential",
                type: "3BHK Flats",
                units: 45,
            },
            {
                kind: "commercial",
                type: "Shops",
                units: 5,
            }
        ],
        featured: true,
    },
    /*{
        slug: "sample-project-two",
        name: "TODO Project Name Two",
        developer: "TODO Builder Name",
        status: "upcoming",
        reraNo: "TODO-PROJECT-RERA-2",
        locality: "TODO Locality",
        city: "Patna",
        state: "Bihar",
        summary: "TODO: two or three sentences describing the project.",
        highlights: ["TODO highlight", "TODO highlight"],
        amenities: ["TODO amenity", "TODO amenity"],
        featured: false,
    },*/
];
 
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const featuredProjects = () => projects.filter((p) => p.featured);