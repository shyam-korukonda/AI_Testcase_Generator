import React from "react";

function HistoryPanel({ history, loadHistory }) {

  return (

    <div>

      <h3>Test Case History</h3>

      {history.length === 0 && (
        <p>No history yet</p>
      )}

      {history.map((item, index) => (

        <div
          key={index}
          className="history-item"
          onClick={() => loadHistory(item)}
        >
          {item.feature}
        </div>

      ))}

    </div>

  );

}

export default HistoryPanel;