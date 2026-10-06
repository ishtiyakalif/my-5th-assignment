import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import MyStack from "./components/MyStack";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load technologies");
        return response.json();
      })
      .then((data) => setTechnologies(data))
      .catch(() => toast.error("Could not load technologies."))
      .finally(() => setLoading(false));
  }, []);

  const addToStack = (technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (id) => {
    const removed = stack.find((item) => item.id === id);
    setStack((current) => current.filter((item) => item.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack.`);
  };

  const removeAll = () => {
    if (!stack.length) {
      toast.warning("Your stack is already empty.");
      return;
    }

    setStack([]);
    toast.success("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="technologies-section" id="technologies">
          <div className="section-heading">
            <h2>
              Explore the <span>Technologies</span>
            </h2>
            <p>Pick the tools you need to build your ideal stack.</p>
          </div>

          {loading ? (
            <div className="loading">Loading technologies...</div>
          ) : (
            <div className="stack-builder">
              <div className="technology-grid">
                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    added={stack.some((item) => item.id === technology.id)}
                    onAdd={addToStack}
                  />
                ))}
              </div>

              <MyStack
                stack={stack}
                onRemove={removeFromStack}
                onRemoveAll={removeAll}
              />
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
