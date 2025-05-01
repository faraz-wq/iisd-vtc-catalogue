
import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/colleges`;

export interface College {
  _id: string;
  name: string;
  shortName: string;
  logo?: string;
  banner?: string;
  description: string;
  location: string;
  affiliation?: string;
  contact?: Contact;
  color: string;
  programs: (Program)[];
  facilities: string[];
  faculty: Faculty[];
  events: Event[];
}
 
interface Contact {
  address?: string;
  phone?: string[];
  email?: string;
}

export interface Faculty {
  _id?: string;
  name: string;
  position: string;
  qualification: string;
  image: string;
}

export interface Event {
  _id?: string;
  title: string;
  date: string;
  description: string;
}

export interface Program {
  _id?: string;
  title: string;
  category: string;
  duration: string;
  eligibility?: string;
  description?: string;
  career?: string;
  features?: string[];
  colleges: College[];
}

export const getColleges = async (): Promise<College[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
    throw new Error('Failed to fetch colleges');
  }
};

export const getCollege = async (id: string): Promise<College> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    console.log(response.data);
    return cleanCollegeData(response.data);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
    throw new Error('Failed to fetch college');
  }
};


export const getCollegeByName = async (short: string): Promise<College> => {
  try {
    const response = await axios.get(`${API_URL}/short/${short}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
    console.log(error);
    throw new Error('Failed to fetch college');
  }
};

function cleanCollegeData(data)  {
  // Initialize cleaned data object
  const cleanedData = { ...data };

  // Parse 'contact' field from JSON string to object
  if (typeof cleanedData.contact === "string") {
    try {
      cleanedData.contact = JSON.parse(cleanedData.contact);
    } catch (error) {
      console.error("Failed to parse 'contact' field:", error);
      cleanedData.contact = {
        address: "",
        phone: [],
        email: "",
      };
    }
  }

  // Ensure 'contact.phone' is always an array
  if (!Array.isArray(cleanedData.contact.phone)) {
    cleanedData.contact.phone = [];
  }

  // Parse 'facilities' field from JSON string to array
  if (Array.isArray(cleanedData.facilities)) {
    cleanedData.facilities = cleanedData.facilities
      .map((facility: string) => {
        try {
          return JSON.parse(facility); // Parse each facility string
        } catch (error) {
          console.error("Failed to parse 'facilities' field:", error);
          return [];
        }
      })
      .flat(); // Flatten nested arrays
  } else {
    cleanedData.facilities = [];
  }

  // Ensure 'programs' is an array
  if (!Array.isArray(cleanedData.programs)) {
    cleanedData.programs = [];
  }

  // Ensure 'faculty' is an array
  if (!Array.isArray(cleanedData.faculty)) {
    cleanedData.faculty = [];
  }

  // Ensure 'events' is an array
  if (!Array.isArray(cleanedData.events)) {
    cleanedData.events = [];
  }

  // Remove unnecessary fields like '__v'
  delete cleanedData.__v;

  console.log(cleanedData);
  return cleanedData;
}
