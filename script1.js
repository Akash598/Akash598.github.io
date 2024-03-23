//https://script.google.com/macros/s/AKfycbwCjT7BfXpLVP9uKedPCGqP9MPndlk38Qzv2RNWtXj8aE8ACWxRTkUH1sy_cQCURJk5/exec

// document.addEventListener('DOMContentLoaded', function() {
//     fetchData();
//     document.getElementById('apply-button').addEventListener('click', applyFilters);
//     document.getElementById('reset-button').addEventListener('click', resetFilters);
//     document.getElementById('prev-page-button').addEventListener('click', prevPage);
//     document.getElementById('next-page-button').addEventListener('click', nextPage);
//   });
  
//   let originalData = [];
//   let filteredData = [];
//   let currentPage = 1;
//   const rowsPerPage = 10;
  
//   function fetchData() {
//     fetch('https://script.google.com/macros/s/AKfycbwCjT7BfXpLVP9uKedPCGqP9MPndlk38Qzv2RNWtXj8aE8ACWxRTkUH1sy_cQCURJk5/exec')
//       .then(response => response.json())
//       .then(data => {
//         originalData = data;
//         filteredData = data;
//         populateTable(filteredData);
//         createFilters(filteredData);
//         updatePagination();
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }
  
//   function populateTable(data) {
//     const tableHeaders = document.querySelector('#table-headers');
//     const tableBody = document.querySelector('#table-body');
  
//     // Clear any existing table headers and data
//     tableHeaders.innerHTML = '';
//     tableBody.innerHTML = '';
  
//     // Populate table headers dynamically
//     const headersRow = document.createElement('tr');
//     Object.keys(data[0]).forEach(key => {
//       const th = document.createElement('th');
//       th.textContent = key;
//       headersRow.appendChild(th);
//     });
//     tableHeaders.appendChild(headersRow);
  
//     // Populate table data dynamically
//     const currentPageData = getCurrentPageData(); // Get current page data
//     currentPageData.forEach(item => {
//       const row = document.createElement('tr');
//       Object.entries(item).forEach(([key, value]) => {
//         const td = document.createElement('td');
//         if (key === 'Link of Product Release Blog') {
//           const link = document.createElement('a');
//           link.href = value;
//           link.textContent = 'Release Notes';
//           td.appendChild(link);
//         } else {
//           td.textContent = value;
//         }
//         row.appendChild(td);
//       });
//       tableBody.appendChild(row);
//     });
//   }
  
//   function createFilters(data) {
//     const filtersContainer = document.getElementById('filters');
//     filtersContainer.innerHTML = ''; // Clear existing filters
    
//     // Create a dropdown filter for each column
//     Object.keys(data[0]).forEach(key => {
//       const filterDropdown = document.createElement('select');
//       filterDropdown.setAttribute('data-column', key);
      
//       // Populate dropdown options with unique values from the column
//       const values = new Set(data.map(item => item[key]));
//       const defaultOption = document.createElement('option');
//       defaultOption.textContent = `Filter by ${key}`;
//       defaultOption.setAttribute('value', '');
//       filterDropdown.appendChild(defaultOption);
//       values.forEach(value => {
//         const option = document.createElement('option');
//         option.textContent = value;
//         option.setAttribute('value', value);
//         filterDropdown.appendChild(option);
//       });
      
//       filtersContainer.appendChild(filterDropdown);
//     });
//   }
  
//   function applyFilters() {
//     const filters = document.querySelectorAll('#filters select');
//     filteredData = originalData.slice(); // Reset filtered data to original data
    
//     filters.forEach(filter => {
//       const column = filter.dataset.column;
//       const value = filter.value;
//       if (value !== '') {
//         filteredData = filteredData.filter(item => item[column] === value);
//       }
//     });
  
//     currentPage = 1; // Reset to first page after applying filters
//     updatePagination();
//     populateTable(getCurrentPageData());
//   }
  
//   function resetFilters() {
//     document.querySelectorAll('#filters select').forEach(select => {
//       select.value = ''; // Reset filter dropdowns
//     });
//     filteredData = originalData.slice(); // Reset filtered data to original data
//     currentPage = 1; // Reset to first page
//     updatePagination();
//     populateTable(getCurrentPageData());
//   }
  
//   function updatePagination() {
//     const totalPages = Math.ceil(filteredData.length / rowsPerPage);
//     document.getElementById('page-info').textContent = `Page ${currentPage} of ${totalPages}`;
//     document.getElementById('prev-page-button').disabled = currentPage === 1;
//     document.getElementById('next-page-button').disabled = currentPage === totalPages || totalPages === 0;
//   }
  
//   function getCurrentPageData() {
//     const startIndex = (currentPage - 1) * rowsPerPage;
//     const endIndex = startIndex + rowsPerPage;
//     return filteredData.slice(startIndex, endIndex);
//   }
  
//   function prevPage() {
//     if (currentPage > 1) {
//       currentPage--;
//       updatePagination();
//       populateTable(getCurrentPageData());
//     }
//   }
  
//   function nextPage() {
//     const totalPages = Math.ceil(filteredData.length / rowsPerPage);
//     if (currentPage < totalPages) {
//       currentPage++;
//       updatePagination();
//       populateTable(getCurrentPageData());
//     }
//   }

document.addEventListener('DOMContentLoaded', function() {
    fetchData();
    document.getElementById('apply-button').addEventListener('click', applyFilters);
    document.getElementById('reset-button').addEventListener('click', resetFilters);
    document.getElementById('prev-page-button').addEventListener('click', prevPage);
    document.getElementById('next-page-button').addEventListener('click', nextPage);
  });
  
  let originalData = [];
  let filteredData = [];
  let currentPage = 1;
  const rowsPerPage = 10;
  
  function fetchData() {
    fetch('https://script.google.com/macros/s/AKfycbwCjT7BfXpLVP9uKedPCGqP9MPndlk38Qzv2RNWtXj8aE8ACWxRTkUH1sy_cQCURJk5/exec')
      .then(response => response.json())
      .then(data => {
        originalData = data;
        filteredData = data;
        populateTable(filteredData);
        createFilters(filteredData);
        updatePagination();
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  function populateTable(data) {
    const tableHeaders = document.querySelector('#table-headers');
    const tableBody = document.querySelector('#table-body');
  
    // Clear any existing table headers and data
    tableHeaders.innerHTML = '';
    tableBody.innerHTML = '';
  
    // Populate table headers dynamically
    const headersRow = document.createElement('tr');
    Object.keys(data[0]).forEach(key => {
      const th = document.createElement('th');
      th.textContent = key;
      headersRow.appendChild(th);
    });
    tableHeaders.appendChild(headersRow);
  
    // Populate table data dynamically
    const currentPageData = getCurrentPageData(); // Get current page data
    currentPageData.forEach(item => {
      const row = document.createElement('tr');
      Object.entries(item).forEach(([key, value]) => {
        const td = document.createElement('td');
        if (key === 'Release Note') {
          const link = document.createElement('a');
          link.href = value;
          link.textContent = 'Release Notes';
          td.appendChild(link);
        } else {
          td.textContent = value;
        }
        row.appendChild(td);
      });
      tableBody.appendChild(row);
    });
  }
  
  function createFilters(data) {
    const filtersContainer = document.getElementById('filters');
    filtersContainer.innerHTML = ''; // Clear existing filters
    
    // Create a dropdown filter for each column
    const allowedColumns = ['Country', 'Release Type'];
    allowedColumns.forEach(key => {
      const filterDropdown = document.createElement('select');
      filterDropdown.setAttribute('data-column', key);
      
      // Populate dropdown options with unique values from the column
      const values = new Set(data.map(item => item[key]));
      const defaultOption = document.createElement('option');
      defaultOption.textContent = `Filter by ${key}`;
      defaultOption.setAttribute('value', '');
      filterDropdown.appendChild(defaultOption);
      values.forEach(value => {
        const option = document.createElement('option');
        option.textContent = value;
        option.setAttribute('value', value);
        filterDropdown.appendChild(option);
      });
      
      filtersContainer.appendChild(filterDropdown);
    });
}
  
  function applyFilters() {
    const filters = document.querySelectorAll('#filters select');
    const searchText = document.getElementById('search-input').value.toLowerCase().trim();
  
    filteredData = originalData.slice(); // Reset filtered data to original data
  
    // Apply dropdown filters
    filters.forEach(filter => {
      const column = filter.dataset.column;
      const value = filter.value;
      if (value !== '') {
        filteredData = filteredData.filter(item => item[column] === value);
      }
    });
  
    // Apply search text filter
    if (searchText !== '') {
      filteredData = filteredData.filter(item => {
        return Object.values(item).some(val => val.toString().toLowerCase().includes(searchText));
      });
    }
  
    currentPage = 1; // Reset to first page after applying filters
    updatePagination();
    populateTable(getCurrentPageData());
  }
  
  function resetFilters() {
    document.querySelectorAll('#filters select').forEach(select => {
      select.value = ''; // Reset filter dropdowns
    });
    document.getElementById('search-input').value = ''; // Reset search input
    filteredData = originalData.slice(); // Reset filtered data to original data
    currentPage = 1; // Reset to first page
    updatePagination();
    populateTable(getCurrentPageData());
  }
  
  function updatePagination() {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    document.getElementById('page-info').textContent = `Page ${currentPage} of ${totalPages}`;
    document.getElementById('prev-page-button').disabled = currentPage === 1;
    document.getElementById('next-page-button').disabled = currentPage === totalPages || totalPages === 0;
  }
  
  function getCurrentPageData() {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return filteredData.slice(startIndex, endIndex);
  }
  
  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
      populateTable(getCurrentPageData());
    }
  }
  
  function nextPage() {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      updatePagination();
      populateTable(getCurrentPageData());
    }
  }
  
  