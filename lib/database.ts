import { supabase } from "./supabaseClient";

// Insert data into a table
export const insertData = async (table: string, data: object) => {
  const { data: insertedData, error } = await supabase.from(table).insert(data);
  if (error) throw new Error(error.message);
  return insertedData;
};

// Fetch data from a table
export const fetchData = async (table: string) => {
  const { data, error } = await supabase.from(table).select("*");
  if (error) throw new Error(error.message);
  return data;
};
