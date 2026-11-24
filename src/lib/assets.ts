import logo from "@/assets/logo-transparent.png";
import logoSolid from "@/assets/Logo.jpg";
import vandeBharatHero from "@/assets/vande-bharat-hero.jpg";
import engineeringLab from "@/assets/engineering-lab.jpg";
import imwTechnology from "@/assets/imw-technology.jpg";
import precisionEngineering from "@/assets/precision-engineering.jpg";

import stage1Inspection from "@/assets/1.jpg";
import stage2Preparation from "@/assets/2.jpg";
import stage3Sandblasting from "@/assets/3.jpg";
import stage4Grinding from "@/assets/4.jpg";
import stage5Marking from "@/assets/5.jpg";
import stage6Mounting from "@/assets/6.jpg";
import stage7Telemetry from "@/assets/7.jpg";
import stage8Calibration from "@/assets/8.jpg";

import field01 from "@/assets/field/field-01.jpg";
import field02 from "@/assets/field/field-02.jpg";
import field03 from "@/assets/field/field-03.jpg";
import field04 from "@/assets/field/field-04.jpg";
import field05 from "@/assets/field/field-05.jpg";
import field06 from "@/assets/field/field-06.jpg";
import field07 from "@/assets/field/field-07.jpg";
import field08 from "@/assets/field/field-08.jpg";
import field09 from "@/assets/field/field-09.jpg";
import field10 from "@/assets/field/field-10.jpg";
import field11 from "@/assets/field/field-11.jpg";
import field12 from "@/assets/field/field-12.jpg";
import field13 from "@/assets/field/field-13.jpg";
import field14 from "@/assets/field/field-14.jpg";

import alstomLogo from "@/assets/logos/alstom.svg";
import bemlLogo from "@/assets/logos/beml.png";
import indianRailwaysLogo from "@/assets/logos/indian-railways-emblem.jpg";
import kinetLogo from "@/assets/logos/kinet.svg";
import rdsoLogo from "@/assets/logos/rdso.jpg";
import titagarhLogo from "@/assets/logos/titagarh.svg";
import vukvLogo from "@/assets/logos/vukv.svg";
import vuzLogo from "@/assets/logos/vuz.webp";

import delhiMetroPhoto from "@/assets/stock/delhi-metro.jpg";
import pantographTestingPhoto from "@/assets/stock/pantograph-testing.jpg";
import trainBogiePhoto from "@/assets/stock/train-bogie.jpg";
import vandeBharatMumbaiPhoto from "@/assets/stock/vande-bharat-mumbai.jpg";
import vandeBharatSleeperPhoto from "@/assets/stock/vande-bharat-sleeper.jpg";
import velimTestCircuitPhoto from "@/assets/stock/velim-test-circuit.jpg";
import vuzCerhenicePhoto from "@/assets/stock/vuz-cerhenice.jpg";

export const siteAssets = {
  logo,
  logoSolid,
  vandeBharatHero,
  engineeringLab,
  imwTechnology,
  precisionEngineering,
  logos: {
    alstom: alstomLogo,
    beml: bemlLogo,
    indianRailways: indianRailwaysLogo,
    kinet: kinetLogo,
    rdso: rdsoLogo,
    titagarh: titagarhLogo,
    vukv: vukvLogo,
    vuz: vuzLogo,
  },
  stock: {
    delhiMetro: delhiMetroPhoto,
    pantographTesting: pantographTestingPhoto,
    trainBogie: trainBogiePhoto,
    vandeBharatMumbai: vandeBharatMumbaiPhoto,
    vandeBharatSleeper: vandeBharatSleeperPhoto,
    velimTestCircuit: velimTestCircuitPhoto,
    vuzCerhenice: vuzCerhenicePhoto,
  },
  field: {
    daqHardware: field01,
    teamMetroStation: field02,
    opticalCameraRig: field03,
    aeiVuzTrackside: field04,
    coachDaqWiring: field05,
    teamBenchCollab: field06,
    mainControlCabinet: field07,
    metroCabNoseCheck: field08,
    dewesoftLiveAnalysis: field09,
    cabConsoleTesting: field10,
    onboardTrialRacks: field11,
    documentationReview: field12,
    underframePitInspection: field13,
    tracksideAnemometer: field14,
  },
  workshopStages: [
    {
      image: stage1Inspection,
      title: "Receiving & Initial Inspection",
      subtitle: "Stage 01 · Dimensional & Visual Verification",
    },
    {
      image: stage2Preparation,
      title: "Masking & Surface Preparation",
      subtitle: "Stage 02 · Pre-Treatment Setup",
    },
    {
      image: stage3Sandblasting,
      title: "Controlled Surface Cleaning",
      subtitle: "Stage 03 · Sandblasting Operations",
    },
    {
      image: stage4Grinding,
      title: "Precision Surface Grinding",
      subtitle: "Stage 04 · Sensor Mounting Preparation",
    },
    {
      image: stage5Marking,
      title: "Strain Gauge Position Layout",
      subtitle: "Stage 05 · Geometric Marking",
    },
    {
      image: stage6Mounting,
      title: "Sensor & Bridge Integration",
      subtitle: "Stage 06 · Precision Instrumentation",
    },
    {
      image: stage7Telemetry,
      title: "Jig Mounting & Telemetry Setup",
      subtitle: "Stage 07 · Signal Conditioning Assembly",
    },
    {
      image: stage8Calibration,
      title: "Load Testing & Calibration",
      subtitle: "Stage 08 · Traceable Verification",
    },
  ],
} as const;
