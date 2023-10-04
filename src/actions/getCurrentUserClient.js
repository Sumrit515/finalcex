import axios from "axios";

export async function getCurrentUserClient() {
    
    const response = await axios.get("/api/getCurrentUser");
    const user = await response.json();
    return user;
  }
  