import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Github, MapPin, GraduationCap, Code, ChevronDown, Globe, Briefcase } from 'lucide-react';
import Profile from "./assets/dhanush.png"

const translations = {
  de: {
    nav: {
      about: 'Über mich',
      experience: 'Erfahrung',
      education: 'Bildung',
      projects: 'Projekte',
      contact: 'Kontakt'
    },

    hero: {
      greeting: 'Hallo, ich bin',
      title: 'Dhanush',
      subtitle: 'Masterstudent für Artificial Intelligence und Robotik in Deutschland mit Schwerpunkt auf Data Engineering, Analytics und Business Intelligence. Erfahrung mit Python, SQL, PySpark, ETL-Pipelines, Datenqualität, AWS und Data Warehousing.',
      cta: 'Kontaktieren Sie mich'
    },

    about: {
      title: 'Wer bin ich?',
      content: 'Hallo, ich bin Dhanush und studiere derzeit Artificial Intelligence und Robotik in Deutschland.\n\nMein fachlicher Schwerpunkt liegt auf Data Engineering, Datenverarbeitung, Analytics und Business Intelligence. Ich arbeite mit Python, SQL, PySpark, ETL/ELT-Pipelines, Datenqualität, AWS und Data Warehousing.\n\nIch interessiere mich für skalierbare Datenplattformen, Analytics Engineering, zuverlässige Datenpipelines und die Entwicklung datengetriebener Lösungen.',
      button: 'Mehr über mich'
    },

    experience: {
      title: 'Berufserfahrung',
      description: 'Mehr als 3 Jahre Erfahrung in Data Engineering, Datenverarbeitung, Analytics und Business Intelligence mit Schwerpunkt auf Python, SQL, verteilten Datenverarbeitungssystemen und Cloud-Datenplattformen.',
      download: 'Lebenslauf herunterladen',
      jobs: [
        {
          title: 'Data Engineer – Analytics & BI',
          company: 'Jeeves Information Systems (Forterro)',
          duration: '06/2023 - 01/2025',
          points: [
            'Entwickelte skalierbare Spark-ETL-Pipelines mit PySpark und Spark SQL und implementierte komplexe Joins, Window Functions und wiederverwendbare Transformationen für die Batch-Verarbeitung großer Datenmengen.',
            'Konzipierte cloudbasierte Datenpipelines mit Amazon S3, AWS Glue und Amazon Redshift und transformierte Rohdaten in aufbereitete analytische Datensätze für Reporting und Business Intelligence.',
            'Entwickelte analytische Datenmodelle und interaktive Power-BI-Dashboards mit SQL und DAX und überführte Geschäftsanforderungen in KPI-Reports und Performance-Kennzahlen.',
            'Optimierte verteilte Datenverarbeitung und analytische Abfragen durch Partition Pruning, Predicate Pushdown, Broadcast Joins und Execution-Plan-Analyse.',
            'Implementierte Infrastruktur-Provisionierung, automatisierte Tests und CI/CD-Workflows mit Terraform und GitHub Actions zur Verbesserung von Deployment-Konsistenz und Zuverlässigkeit.'
          ]
        },
        {
          title: 'Associate Data Engineer',
          company: 'Jeeves Information Systems (Forterro)',
          duration: '05/2022 - 06/2023',
          points: [
            'Entwickelte Python-basierte ETL-Pipelines zur Datenaufnahme aus mehreren Quellsystemen, zur Datenbereinigung und Validierung sowie zum Laden strukturierter Datensätze in analytische Speichersysteme.',
            'Erstellte PySpark-Transformationsworkflows zur Verarbeitung großer Datensätze, implementierte Deduplizierung und standardisierte Schemas für zuverlässige Analysen und Reports.',
            'Führte explorative Datenanalysen mit Python, Pandas und SQL durch und nutzte Aggregationen, Joins und Window Functions zur Erkennung von Datenmustern und Unstimmigkeiten.',
            'Implementierte automatisierte Datenqualitätsprüfungen, Schema-Validierung und Source-to-Target-Reconciliation zur Verbesserung der Datenkonsistenz und Zuverlässigkeit.'
          ]
        }
      ]
    },

    education: {
      title: 'Bildung',
      items: [
        {
          university: 'Hochschule Hof, University of Applied Sciences',
          year: '2026 - 2028',
          degree: 'Master in Artificial Intelligence und Robotik'
        },
        {
          university: 'Visvesvaraya Technological University',
          year: '2018 - 2022',
          degree: 'Bachelor of Engineering in Information Science'
        }
      ]
    },

    projects: {
      title: 'Ausgewählte Projekte',
      viewCode: 'Code auf GitHub ansehen',
      items: [
        {
          title: 'SupplyChain 360',
          url: 'https://github.com/Dhanush-pv/SupplyChain-360',
          description: 'Eine Supply-Chain-Analytics-Plattform zur Zusammenführung von Vertriebs-, Bestands-, Lieferanten-, Lager- und Versanddaten. Die Architektur nutzt ETL/ELT-Pipelines und eine Bronze-Silver-Gold-Datenstruktur, um konsistente Analysedaten für Nachfrageanalysen, Bestandsüberwachung und Störungsszenarien bereitzustellen.',
          stack: ['Python', 'SQL', 'Azure Data Factory', 'Azure Data Lake Storage Gen2', 'Azure Databricks', 'PySpark', 'Delta Lake', 'Event Hubs', 'dbt', 'Power BI']
        },
        {
          title: 'Customer360 Governed Platform',
          url: 'https://github.com/Dhanush-pv/Customer360',
          description: 'Eine Customer-Data-Plattform zur Integration von Kundendaten aus mehreren Quellsystemen und zur Erstellung einheitlicher Kundenprofile. Der Schwerpunkt liegt auf Identity Resolution, SCD Type 2, Datenqualität und Data Governance für nachvollziehbare Kunden- und Lifecycle-Analysen.',
          stack: ['Python', 'SQL', 'Snowflake', 'dbt', 'Apache Airflow', 'PostgreSQL', 'Great Expectations', 'Soda', 'Tableau']
        },
        {
          title: 'Sales Lakehouse Pipeline',
          url: 'https://github.com/Dhanush-pv/sales-lakehouse-pipeline',
          description: 'Eine inkrementelle Medallion-Pipeline auf Azure Databricks. Ein Watermark lädt geänderte Zeilen aus PostgreSQL in Bronze, ein MERGE hält je Kunde den neuesten Datensatz in Silver, und Gold aggregiert den Umsatz je Region. Datenqualitätsprüfungen zwischen den Schichten lassen den Workflow bei fehlerhaften Daten fehlschlagen; Secrets, Tests und CI/CD mit Databricks Asset Bundles machen Deployments wiederholbar.',
          stack: ['Python', 'SQL', 'Azure Databricks', 'PySpark', 'Delta Lake', 'Databricks Workflows', 'Databricks Asset Bundles', 'PostgreSQL', 'GitHub Actions', 'pytest']
        },
        {
          title: 'FraudWatch+',
          url: 'https://github.com/Dhanush-pv/FraudWatch',
          description: 'Eine ereignisgesteuerte Plattform zur Erkennung verdächtiger Finanztransaktionen. Sie kombiniert Change Data Capture, Streaming-Verarbeitung, regelbasierte Erkennung und Machine-Learning-Modelle mit Lakehouse-Datenverarbeitung und beziehungsbasierter Betrugsanalyse. Die Repository-Version umfasst 33 bestandene automatisierte Tests.',
          stack: ['Python', 'SQL', 'PostgreSQL', 'Debezium', 'Redpanda', 'Spark Structured Streaming', 'Apache Iceberg', 'dbt', 'MLflow', 'scikit-learn', 'Neo4j', 'Docker']
        },
        {
          title: 'BankRisk Intelligence',
          url: 'https://github.com/Dhanush-pv/BankRisk-Intelligence',
          description: 'Ein Analyseprojekt zu Bankenrisiken auf Basis frei verfügbarer Daten: vierteljährliche FDIC-Bankkennzahlen, makroökonomische FRED-Reihen und SEC-EDGAR-Einreichungen. Die Ingestion-Schicht speichert die Rohdaten der APIs unverändert mit Prüfsummen-Manifesten; dbt-Metrikdefinitionen, Quellenabgleich und ein Power-BI-Dashboard zum Vergleich der Banken mit Zinsniveau und Kreditqualität sind in Arbeit.',
          stack: ['Python', 'SQL', 'DuckDB', 'dbt', 'Power BI', 'FRED API', 'FDIC BankFind API', 'SEC EDGAR', 'GitHub Actions', 'pytest']
        },
        {
          title: 'Scale and Cost Benchmark Lab',
          url: 'https://github.com/Dhanush-pv/Scale-and-Cost-Benchmark-Lab',
          description: 'Ein Benchmarking-Framework zum Vergleich analytischer Datenbank- und Processing-Engines anhand gemeinsamer SQL-Workloads. Wiederverwendbare Engine-Adapter und Konfigurationen schaffen eine Grundlage zur Untersuchung von Abfrageausführungszeiten, Ressourcenverbrauch, Skalierbarkeit und Kostenaspekten.',
          stack: ['Python', 'SQL', 'DuckDB', 'ClickHouse', 'Apache Spark', 'Docker', 'Parquet', 'pytest', 'GitHub Actions']
        }
      ]
    },

    contact: {
      title: 'Kontakt',
      phone: 'Telefonnummer',
      email: 'E-Mail',
      location: 'Standort',
      locationValue: 'Deutschland',
      button: 'Nachricht senden'
    }
  },

  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      contact: 'Contact'
    },

    hero: {
      greeting: 'Hello, I am',
      title: 'Dhanush',
      subtitle: 'Master’s student in Artificial Intelligence and Robotics in Germany, focused on Data Engineering, Analytics and Business Intelligence. Experienced with Python, SQL, PySpark, ETL pipelines, data quality, AWS and data warehousing.',
      cta: 'Contact Me'
    },

    about: {
      title: 'Who am I?',
      content: 'Hi, I’m Dhanush, currently pursuing a Master’s in Artificial Intelligence and Robotics in Germany.\n\nMy professional focus is Data Engineering, data processing, Analytics and Business Intelligence. My technical areas include Python, SQL, PySpark, ETL/ELT pipelines, data quality, AWS and data warehousing.\n\nI am interested in building scalable data platforms, reliable data pipelines and analytics solutions that turn operational data into actionable insights.',
      button: 'More About Me'
    },

    experience: {
      title: 'Professional Experience',
      description: '3+ years of experience across data engineering, data processing, analytics and business intelligence, with a focus on Python, SQL, distributed data processing and cloud data platforms.',
      download: 'Download Resume',
      jobs: [
        {
          title: 'Data Engineer – Analytics & BI',
          company: 'Jeeves Information Systems (Forterro)',
          duration: '06/2023 - 01/2025',
          points: [
            'Developed scalable Spark ETL pipelines using PySpark and Spark SQL, implementing complex joins, window functions and reusable transformations for large-scale batch data processing.',
            'Designed cloud-based data pipelines integrating Amazon S3, AWS Glue and Amazon Redshift, transforming raw data into curated analytical datasets for reporting and business intelligence.',
            'Developed analytical data models and interactive Power BI dashboards using SQL and DAX, translating business requirements into KPI reports, performance metrics and business insights.',
            'Optimised distributed data processing and analytical queries through partition pruning, predicate pushdown, broadcast joins and execution-plan analysis to improve pipeline and reporting performance.',
            'Implemented infrastructure provisioning, automated testing and CI/CD workflows using Terraform and GitHub Actions to improve deployment consistency, scalability and reliability.'
          ]
        },
        {
          title: 'Associate Data Engineer',
          company: 'Jeeves Information Systems (Forterro)',
          duration: '05/2022 - 06/2023',
          points: [
            'Developed Python-based ETL pipelines to ingest data from multiple source systems, perform data cleansing and validation, and load structured datasets into analytical storage.',
            'Built PySpark transformation workflows to process large datasets, implement deduplication and standardise schemas, preparing reliable datasets for downstream analytics and reporting.',
            'Performed exploratory data analysis using Python, Pandas and SQL, applying aggregations, joins and window functions to identify data patterns, investigate discrepancies and generate actionable insights.',
            'Implemented automated data quality checks, schema validation and source-to-target reconciliation to improve data consistency and reliability across processing workflows.'
          ]
        }
      ]
    },

    education: {
      title: 'Education',
      items: [
        {
          university: 'Hochschule Hof, University of Applied Sciences',
          year: '2026 - 2028',
          degree: 'Master’s in Artificial Intelligence and Robotics'
        },
        {
          university: 'Visvesvaraya Technological University',
          year: '2018 - 2022',
          degree: 'Bachelor of Engineering in Information Science'
        }
      ]
    },

    projects: {
      title: 'Selected Projects',
      viewCode: 'View on GitHub',
      items: [
        {
          title: 'SupplyChain 360',
          url: 'https://github.com/Dhanush-pv/SupplyChain-360',
          description: 'A supply chain analytics platform consolidating sales, inventory, supplier, warehouse and shipment data. Its ETL/ELT workflows and Bronze-Silver-Gold data architecture prepare consistent analytical datasets for demand analysis, inventory monitoring and disruption scenario analysis.',
          stack: ['Python', 'SQL', 'Azure Data Factory', 'Azure Data Lake Storage Gen2', 'Azure Databricks', 'PySpark', 'Delta Lake', 'Event Hubs', 'dbt', 'Power BI']
        },
        {
          title: 'Customer360 Governed Platform',
          url: 'https://github.com/Dhanush-pv/Customer360',
          description: 'A customer data platform integrating records from multiple source systems into unified customer profiles. The implementation focuses on identity resolution, SCD Type 2 historical tracking, data quality and data governance to support traceable customer and lifecycle analytics.',
          stack: ['Python', 'SQL', 'Snowflake', 'dbt', 'Apache Airflow', 'PostgreSQL', 'Great Expectations', 'Soda', 'Tableau']
        },
        {
          title: 'Sales Lakehouse Pipeline',
          url: 'https://github.com/Dhanush-pv/sales-lakehouse-pipeline',
          description: 'An incremental Medallion pipeline on Azure Databricks. A watermark loads changed rows from PostgreSQL into Bronze, a MERGE keeps the latest record per customer in Silver, and Gold aggregates sales by region. Data-quality gates between layers fail the workflow on bad data, while secrets, tests and CI/CD with Databricks Asset Bundles keep deployments repeatable.',
          stack: ['Python', 'SQL', 'Azure Databricks', 'PySpark', 'Delta Lake', 'Databricks Workflows', 'Databricks Asset Bundles', 'PostgreSQL', 'GitHub Actions', 'pytest']
        },
        {
          title: 'FraudWatch+',
          url: 'https://github.com/Dhanush-pv/FraudWatch',
          description: 'An event-driven financial fraud detection platform for processing transactions and identifying suspicious activity. It combines Change Data Capture, streaming data processing, rule-based detection and machine-learning models with lakehouse processing and graph-based fraud analysis. The repository version includes 33 passing automated tests.',
          stack: ['Python', 'SQL', 'PostgreSQL', 'Debezium', 'Redpanda', 'Spark Structured Streaming', 'Apache Iceberg', 'dbt', 'MLflow', 'scikit-learn', 'Neo4j', 'Docker']
        },
        {
          title: 'BankRisk Intelligence',
          url: 'https://github.com/Dhanush-pv/BankRisk-Intelligence',
          description: 'A banking risk analytics project built on free public data: FDIC quarterly bank financials, FRED macroeconomic series and SEC EDGAR filings. The ingestion layer stores raw API responses unchanged with checksum manifests; dbt metric definitions, source reconciliation and a Power BI dashboard comparing banks against interest rates and credit quality are in progress.',
          stack: ['Python', 'SQL', 'DuckDB', 'dbt', 'Power BI', 'FRED API', 'FDIC BankFind API', 'SEC EDGAR', 'GitHub Actions', 'pytest']
        },
        {
          title: 'Scale and Cost Benchmark Lab',
          url: 'https://github.com/Dhanush-pv/Scale-and-Cost-Benchmark-Lab',
          description: 'A benchmarking framework comparing analytical database and processing engines across common SQL workloads. Reusable engine adapters and workload configurations provide a foundation for examining query execution time, resource utilisation, scalability and cost considerations.',
          stack: ['Python', 'SQL', 'DuckDB', 'ClickHouse', 'Apache Spark', 'Docker', 'Parquet', 'pytest', 'GitHub Actions']
        }
      ]
    },

    contact: {
      title: 'Contact Dhanush',
      phone: 'Phone Number',
      email: 'Email',
      location: 'Location',
      locationValue: 'Germany',
      button: 'Send Message'
    }
  }
};

export default function Portfolio() {
  const [language, setLanguage] = useState('de');
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollY } = useScroll();
  const t = translations[language];

  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.98)']
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'de' ? 'en' : 'de');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Fixed Header */}
      <motion.header
        style={{ opacity: headerOpacity, backgroundColor: headerBackground }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-200"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-gray-900"
            >
              DPV
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, value], index) => (
                <motion.button
                  key={key}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => scrollToSection(key === 'about' ? 'about' : key)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 ${
                    activeSection === key ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {value}
                </motion.button>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-all duration-300"
            >
              <Globe size={16} />
              {language === 'de' ? 'EN' : 'DE'}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.p
                variants={itemVariants}
                className="text-blue-600 font-medium mb-4"
              >
                {t.hero.greeting}
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
              >
                {t.hero.title}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                {t.hero.subtitle}
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex gap-4"
              >
                <a
                  href="mailto:dhanush.palani.vijay.kumari.job@gmail.com"
                  className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                >
                  {t.hero.cta}
                </a>
                <a
                  href="https://github.com/Dhanush-pv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-gray-300 text-gray-900 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  GitHub
                </a>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex gap-4 mt-8"
              >
                <a
                  href="https://github.com/Dhanush-pv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-blue-100 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} className="text-gray-700" />
                </a>
                <a
                  href="mailto:dhanush.palani.vijay.kumari.job@gmail.com"
                  className="p-3 bg-gray-100 hover:bg-blue-100 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Mail size={20} className="text-gray-700" />
                </a>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full max-w-md mx-auto"
              >
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center">
                  <div className="w-full h-full p-4 flex items-center justify-center">
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                      <img
                        src={Profile}
                        alt="Profilbild"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl blur-3xl opacity-30"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={32} className="text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">{t.about.title}</h2>
            <motion.p
              variants={fadeInUpVariants}
              className="text-lg text-gray-600 leading-relaxed mb-8"
            >
              {t.about.content}
            </motion.p>
            <motion.a
              variants={fadeInUpVariants}
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              {t.about.button}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              {t.experience.title}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-12 leading-relaxed"
            >
              {t.experience.description}
            </motion.p>

            <div className="space-y-8">
              {t.experience.jobs.map((job, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Briefcase size={24} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                      <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                      <p className="text-sm text-gray-500">{job.duration}</p>
                      {job.points && (
                        <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-700 leading-relaxed">
                          {job.points.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex gap-4"
            >
              <a
                href="https://drive.google.com/file/d/1Okl1ckG05T6zuVgiv0hKXZ1Mqgh9uCP3/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                {t.experience.download}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-12 text-gray-900"
            >
              {t.education.title}
            </motion.h2>

            <div className="space-y-8">
              {t.education.items.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <GraduationCap size={24} className="text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                      <p className="text-purple-600 font-medium mb-2">{edu.university}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-12 text-gray-900"
            >
              {t.projects.title}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {t.projects.items.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Code size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      <Github size={16} />
                      {t.projects.viewCode}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
              >
                {t.contact.title}
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Mail size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t.contact.email}</p>
                    <a
                      href="mailto:dhanush.palani.vijay.kumari.job@gmail.com"
                      className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      dhanush.palani.vijay.kumari.job@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <MapPin size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t.contact.location}</p>
                    <p className="text-lg font-medium text-gray-900">{t.contact.locationValue}</p>
                  </div>
                </div>
              </motion.div>

              <motion.a
                variants={itemVariants}
                href="mailto:dhanush.palani.vijay.kumari.job@gmail.com"
                className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                <Mail size={20} />
                {t.contact.button}
              </motion.a>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full max-w-md mx-auto"
              >
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center">
                  <div className="w-full h-full p-4 flex items-center justify-center">
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                      <img
                        src={Profile}
                        alt="Profilbild"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl blur-3xl opacity-30"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-gray-900 mb-2">Dhanush</p>
              <p className="text-gray-600">
                {language === 'de'
                  ? 'Data Engineer mit Schwerpunkt Analytics & Business Intelligence'
                  : 'Data Engineer focused on Analytics & Business Intelligence'}
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/Dhanush-pv"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-blue-50 rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Github size={20} className="text-gray-700" />
              </a>
              <a
                href="mailto:dhanush.palani.vijay.kumari.job@gmail.com"
                className="p-3 bg-white hover:bg-blue-50 rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Mail size={20} className="text-gray-700" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm"
          >
            <p>© 2026 Dhanush Palani Vijay Kumari. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}