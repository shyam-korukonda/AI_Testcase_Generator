import React, { useState, useEffect } from "react";
import { generateTestCases } from "../api/api";
import HistoryPanel from "./HistoryPanel";
import "../styles/dashboard.css";

function TestCaseGenerator() {

  const [feature, setFeature] = useState("");
  const [testCases, setTestCases] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Load history from localStorage
  useEffect(() => {

    const savedHistory = localStorage.getItem("testcase_history");

    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }

  }, []);

  const handleGenerate = async () => {

    if (!feature) {
      alert("Enter feature description ionasdfa");
      return;
    }

    setLoading(true);

    try {

      const response = await generateTestCases(feature);

      setTestCases(response);

      const newHistory = [
        { feature, test_cases: response.test_cases },
        ...history
      ];

      setHistory(newHistory);

      localStorage.setItem(
        "testcase_history",
        JSON.stringify(newHistory)
      );

    } catch (error) {

      console.error(error);

    }

    setLoading(false);
  };

  const loadHistory = (item) => {

    setFeature(item.feature);

    setTestCases({
      test_cases: item.test_cases
    });

  };

  const downloadCSV = () => {

    if (!testCases) return;

    let csv = "ID,Description,Steps,Expected Result\n";

    testCases.test_cases.forEach(tc => {

      csv += `${tc.id},"${tc.description}","${tc.steps}","${tc.expected_result}"\n`;

    });

    const blob = new Blob([csv], { type: "text/csv" });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "testcases.csv";

    link.click();

  };

  return (

    <div className={`app ${darkMode ? "dark" : "light"}`}>

      {/* Sidebar */}

      <div className="sidebar">

        <h2>AI QA Tool</h2>

        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle Dark Mode
        </button>

        <HistoryPanel
          history={history}
          loadHistory={loadHistory}
        />

      </div>


      {/* Main */}

      <div className="main">

        <div className="card">

          <h2>Generate AI Test Cases</h2>

          <textarea
            rows="4"
            placeholder="Example: Login page with username and password"
            value={feature}
            onChange={(e) => setFeature(e.target.value)}
          />

          <br /><br />

          <button
            className="generate-btn"
            onClick={handleGenerate}
          >
            Generate Test Cases
          </button>

          {loading && (
            <p>⏳ Generating AI Test Cases...</p>
          )}

          {testCases && testCases.test_cases && (

            <div>

              <h3>Generated Test Cases</h3>

              <table>

                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Steps</th>
                    <th>Expected Result</th>
                  </tr>
                </thead>

                <tbody>

                  {testCases.test_cases.map((tc, index) => (

                    <tr key={index}>
                      <td>{tc.id}</td>
                      <td>{tc.description}</td>
                      <td>{tc.steps}</td>
                      <td>{tc.expected_result}</td>
                    </tr>

                  ))}

                </tbody>

              </table>

              <br />

              <button
                className="download-btn"
                onClick={downloadCSV}
              >
                Download CSV
              </button>

            </div>

          )}

        </div>

      </div>

    </div>

  );

}

export default TestCaseGenerator;