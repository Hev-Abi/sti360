import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function UnemployedAnalytics() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await supabase
      .from("employment_status")
      .select("*")
      .eq("status", "unemployed");

    setCount(data.length);
  };

  return (
    <div>
      <h2>Unemployed Graduates</h2>
      <h1>{count}</h1>
    </div>
  );
}