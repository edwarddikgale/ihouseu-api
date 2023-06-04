const fs = require('fs');
const axios = require('axios');
const csvParser = require('csv-parser');

const csvFilePath = 'ihouseuusers.csv'; // Replace with the path to your CSV file
const apiUrl = 'http://localhost:8080/api/ihouseuusers'; // Replace with your API endpoint

const progressBarWidth = 40; // Width of the progress bar in characters
const readCSVFile = (filePath) => {
  return new Promise((resolve, reject) => {
    const rows = [];
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (row) => {
        rows.push(row);
      })
      .on('error', (error) => {
        reject(error);
      })
      .on('end', () => {
        resolve(rows);
      });
  });
};

const sendPostRequest = async (data) => {
  const postData = { ...data };
  delete postData.created;
  delete postData.updated;

  try {
    const response = await axios.post(apiUrl, postData);
    return response.status;
  } catch (error) {
    throw error;
  }
};

const uploadData = async (data) => {
  const totalRows = data.length;
  let uploadedRows = 0;
  const startAtIndex = 85; // Specify the index number to start from
  const pauseAfterRecords = 20; // Specify the number of records to upload before pausing
  const pauseDuration = 60000; // 1 minute pause duration in milliseconds

  for (let i = startAtIndex; i < totalRows; i++) {
    const row = data[i];
    try {
      await sendPostRequest(row);
      uploadedRows++;

      const progress = Math.floor(((uploadedRows - startAtIndex) / (totalRows - startAtIndex)) * 100);
      const progressBarLength = Math.floor((progress / 100) * progressBarWidth);
      const progressBar = '='.repeat(Math.max(0, progressBarLength)); // Ensure positive count value
      const status = `[${progressBar.padEnd(progressBarWidth)}] ${progress}%`;

      console.log(status);

      if (uploadedRows % pauseAfterRecords === 0) {
        console.log(`Pausing for 1 minute after uploading ${pauseAfterRecords} records...`);
        await new Promise((resolve) => setTimeout(resolve, pauseDuration));
      }
    } catch (error) {
      console.error('Error occurred during upload:', error);
    }
  }

  console.log('Upload completed!');
};




// Main function
const main = async () => {
  try {
    const data = await readCSVFile(csvFilePath);
    await uploadData(data);
  } catch (error) {
    console.error('Error occurred:', error);
  }
};

// Run the script
main();
