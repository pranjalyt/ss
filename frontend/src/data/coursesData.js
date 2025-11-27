/**
 * Course data for Shanu Sir Classes
 * Static data for mobile repairing training modules
 */

export const coursesData = [
    {
        id: "basic",
        name: "Basic Module",
        description: "Foundation course covering mobile phone basics, hardware components, and essential repair techniques. Perfect for beginners starting their mobile repairing journey.",
        duration: "4-6 weeks",
        syllabus: [
            {
                title: "Mobile Phone Fundamentals",
                topics: [
                    "Introduction to mobile technology",
                    "Understanding smartphone architecture",
                    "Types of mobile phones and operating systems",
                    "Mobile phone generations (2G, 3G, 4G, 5G)"
                ]
            },
            {
                title: "Hardware Components",
                topics: [
                    "Display types (LCD, AMOLED, IPS)",
                    "Battery technology and types",
                    "Charging ports and connectors",
                    "SIM card slots and memory cards",
                    "Cameras and sensors"
                ]
            },
            {
                title: "Basic Tools & Equipment",
                topics: [
                    "Screwdrivers and opening tools",
                    "Multimeter usage and testing",
                    "Soldering iron basics",
                    "Heat gun and hot air station",
                    "ESD protection and safety"
                ]
            },
            {
                title: "Common Repairs",
                topics: [
                    "Display replacement",
                    "Battery replacement",
                    "Charging port repair",
                    "Speaker and microphone issues",
                    "Button replacement"
                ]
            }
        ]
    },
    {
        id: "software",
        name: "Software Module",
        description: "Comprehensive software training covering flashing, unlocking, and troubleshooting for all major smartphone brands and operating systems.",
        duration: "3-4 weeks",
        syllabus: [
            {
                title: "Android Software",
                topics: [
                    "Android OS architecture",
                    "Flashing and firmware installation",
                    "Pattern lock removal",
                    "FRP (Factory Reset Protection) bypass",
                    "Custom ROM installation",
                    "Root and unroot procedures"
                ]
            },
            {
                title: "iOS Software",
                topics: [
                    "iTunes and iOS updates",
                    "iCloud unlock methods",
                    "iPhone activation and setup",
                    "iOS troubleshooting",
                    "Backup and restore procedures"
                ]
            },
            {
                title: "Flashing Tools & Software",
                topics: [
                    "SP Flash Tool",
                    "Odin for Samsung devices",
                    "Mi Flash Tool for Xiaomi",
                    "QPST and QFIL tools",
                    "UMT, Miracle, and other boxes"
                ]
            },
            {
                title: "Software Troubleshooting",
                topics: [
                    "Boot loop issues",
                    "Dead phone recovery",
                    "IMEI repair",
                    "Network unlock",
                    "Software update failures"
                ]
            }
        ]
    },
    {
        id: "advanced-hardware",
        name: "Advanced Hardware Module",
        description: "Advanced chip-level repairing techniques including motherboard repair, IC replacement, and complex hardware troubleshooting using professional equipment.",
        duration: "6-8 weeks",
        syllabus: [
            {
                title: "Motherboard Architecture",
                topics: [
                    "PCB layers and circuit tracing",
                    "Power IC and charging circuits",
                    "Audio and RF circuits",
                    "CPU and processor architecture",
                    "Understanding schematics and boardview"
                ]
            },
            {
                title: "Chip-Level Repair",
                topics: [
                    "BGA IC removal and reballing",
                    "CPU replacement techniques",
                    "Power IC replacement",
                    "Audio IC repair",
                    "Display IC and backlight issues"
                ]
            },
            {
                title: "Advanced Tools",
                topics: [
                    "BGA rework station operation",
                    "Microscope usage for SMD work",
                    "Ultrasonic cleaner",
                    "Power supply and DC power source",
                    "Oscilloscope basics"
                ]
            },
            {
                title: "Complex Repairs",
                topics: [
                    "Water damage repair",
                    "No power issues",
                    "No display/backlight problems",
                    "Touch IC issues",
                    "WiFi and Bluetooth repair",
                    "Camera and sensor problems"
                ]
            }
        ]
    },
    {
        id: "emmc-ufs",
        name: "eMMC & UFS Training",
        description: "Specialized training in eMMC and UFS chip programming, data recovery, and NAND flash memory repair for modern smartphones.",
        duration: "2-3 weeks",
        syllabus: [
            {
                title: "Memory Technology",
                topics: [
                    "eMMC vs UFS architecture",
                    "NAND flash memory types",
                    "Memory chip identification",
                    "Storage capacity and partitions"
                ]
            },
            {
                title: "eMMC Programming",
                topics: [
                    "eMMC chip removal and installation",
                    "Reading and writing eMMC dumps",
                    "eMMC ISP (In-System Programming)",
                    "eMMC repair and recovery",
                    "Using Easy JTAG, UFI, and other tools"
                ]
            },
            {
                title: "UFS Programming",
                topics: [
                    "UFS chip handling and precautions",
                    "UFS reading and writing",
                    "UFS ISP techniques",
                    "UFS repair procedures",
                    "Latest UFS tools and boxes"
                ]
            },
            {
                title: "Data Recovery",
                topics: [
                    "Dead phone data recovery",
                    "Partition management",
                    "User data extraction",
                    "Firmware corruption repair",
                    "IMEI and baseband repair via memory"
                ]
            }
        ]
    }
];

export default coursesData;
