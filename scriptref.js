

// document.addEventListener('DOMContentLoaded', function() {
//   // Fetch JSON data from the API endpoint
//   fetch('https://script.google.com/macros/s/AKfycbztngZqdN-9VIzHa9s6oPRclHzu1Tkid-9HwVqDakNPWZNh9T2RSYwJNUO6Ova4qjfMYw/exec')
//     .then(response => response.json())
//     .then(data => {
//       const tableHead = document.getElementById('table-head');
//       const tableBody = document.getElementById('table-body');

//       // Extract keys from the first item to use as table headers
//       const keys = Object.keys(data[0]);

//       // Create table header row
//       const headerRow = document.createElement('tr');
//       keys.forEach(key => {
//         const th = document.createElement('th');
//         th.textContent = key;
//         headerRow.appendChild(th);
//       });
//       tableHead.appendChild(headerRow);

//       // Create table rows and populate with data
//       data.forEach(item => {
//         const row = document.createElement('tr');
//         keys.forEach(key => {
//           const td = document.createElement('td');
//           td.textContent = item[key];
//           row.appendChild(td);
//         });
//         tableBody.appendChild(row);
//       });
//     })
//     .catch(error => console.error('Error fetching JSON:', error));
// });
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  // Function to filter data based on Affiliate_ID
  function filterData(searchTerm, data) {
    return data.filter(item => item.Affiliate_ID == searchTerm);
  }

  searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim();

    // Fetch JSON data from the API endpoint
    fetch('https://script.google.com/macros/s/AKfycbztngZqdN-9VIzHa9s6oPRclHzu1Tkid-9HwVqDakNPWZNh9T2RSYwJNUO6Ova4qjfMYw/exec')
      .then(response => response.json())
      .then(data => {
        const filteredData = filterData(searchTerm, data);
        console.log(filteredData)

        if (filteredData.length > 0) {
          // Create the resulting table on a new page
          createResultTable(filteredData);
        } else {
          alert('No matching records found.');
        }
      })
      .catch(error => console.error('Error fetching JSON:', error));
  });

  // Function to create resulting table on a new page
  // function createResultTable(data) {
  //   const keys = Object.keys(data[0]); // Extract keys from the first item

  //   const resultHtml = `
  //     <!DOCTYPE html>
  //     <html lang="en">
  //     <head>
  //       <meta charset="UTF-8">
  //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //       <title>Filtered Results</title>
  //       <link rel="stylesheet" href="styles.css">
  //     </head>
  //     <body>
  //       <div id="table-container">
  //         <table id="data-table">
  //           <thead id="table-head">
  //             <tr>
  //               ${keys.map(key => `<th>${key}</th>`).join('')} <!-- Dynamic headers -->
  //             </tr>
  //           </thead>
  //           <tbody id="table-body">
  //             ${data.map(item => `
  //               <tr>
  //                 ${keys.map(key => `<td>${item[key]}</td>`).join('')} <!-- Dynamic cells -->
  //               </tr>
  //             `).join('')}
  //           </tbody>
  //         </table>
  //       </div>
  //     </body>
  //     </html>
  //   `;

  //   // Open the resulting table in a new window
  //   const resultWindow = window.open('', '_blank');
  //   resultWindow.document.write(resultHtml);
  // }
  // Function to create resulting table on the same page
function createResultTable(data) {
  const keys = Object.keys(data[0]); // Extract keys from the first item

  const resultHtml = `
    <div id="table-container">
      <table id="data-table">
        <thead id="table-head">
          <tr>
            ${keys.map(key => `<th>${key}</th>`).join('')} <!-- Dynamic headers -->
          </tr>
        </thead>
        <tbody id="table-body">
          ${data.map(item => `
            <tr>
              ${keys.map(key => `<td>${item[key]}</td>`).join('')} <!-- Dynamic cells -->
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  // Replace the current page's content with the resulting table
  document.body.innerHTML = resultHtml;
}

});
