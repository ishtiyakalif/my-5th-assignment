import React from "react";
function MyStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="your-stack">
      <div className="stack-heading">
        <div>
          <h2>Your Stack</h2>
          <p>{stack.length} Technology Selected</p>
        </div>
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <div className="empty-icon">+</div>
          <h3>Your stack is empty</h3>
          <p>Add technologies from the list to build your stack.</p>
        </div>
      ) : (
        <>
          <div className="selected-list">
            {stack.map((item) => (
              <div className="selected-item" key={item.id}>
                <img src={item.icon} alt="" />
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.category}</small>
                </div>
                <button onClick={() => onRemove(item.id)} aria-label={`Remove ${item.name}`}>
                  ×
                </button>
              </div>
            ))}
          </div>

          <button className="remove-all" onClick={onRemoveAll}>
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default MyStack;
