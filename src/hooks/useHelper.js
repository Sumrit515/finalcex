export const formatDate = ( dateString) => {
    try {
            
        
        // Create a new Date object from the database string
            const date = new Date(dateString.data);
          
            // Get the desired components:
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const hours = date.getHours().toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
            const year = date.getFullYear().toString()
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const adjustedHours = hours % 12 || 12; // Display 12 instead o

            // Construct the formatted string
            const formattedDate = `${adjustedHours}:${minutes} ${ampm} , ${day}-${month}-${year}`;
          
            return formattedDate;
      
        
    } catch(e) {
        console.log("[FORMAT_DATE_HOOK]",e)
    }
} 