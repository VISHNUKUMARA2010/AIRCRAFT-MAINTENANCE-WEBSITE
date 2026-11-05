import { useEffect, useMemo, usestate } from "react";
import { getMaintenanceRecommedation, healthCheck, UploadAnalyticsFile } from './api/client';
import PlaneCard from './components/PanelCard';

function App() {
  const [excelFile, setExcelFile] = useState(null);