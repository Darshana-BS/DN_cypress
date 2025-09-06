import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function RetroBoard() {
  const [responses, setResponses] = useState([]);
  const [form, setForm] = useState({
    wentWell: "",
    improve: "",
    action: "",
  });

  useEffect(() => {
    fetch("http://localhost:4000/responses")
      .then((res) => res.json())
      .then((data) => {
        setResponses(
          data.slice(1).map(([wentWell, improve, action]) => ({
            wentWell,
            improve,
            action,
          }))
        );
      });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.wentWell && !form.improve && !form.action) return;

    await fetch("http://localhost:4000/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ wentWell: "", improve: "", action: "" });

    const updated = await fetch("http://localhost:4000/responses").then((res) =>
      res.json()
    );
    setResponses(
      updated.slice(1).map(([wentWell, improve, action]) => ({
        wentWell,
        improve,
        action,
      }))
    );
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <Card className="p-4">
        <CardContent className="space-y-4">
          <textarea
            name="wentWell"
            value={form.wentWell}
            onChange={handleChange}
            placeholder="What went well?"
            className="w-full p-2 border rounded"
          />
          <textarea
            name="improve"
            value={form.improve}
            onChange={handleChange}
            placeholder="What can be improved?"
            className="w-full p-2 border rounded"
          />
          <textarea
            name="action"
            value={form.action}
            onChange={handleChange}
            placeholder="Action items"
            className="w-full p-2 border rounded"
          />
          <Button onClick={handleSubmit} className="w-full">
            Submit Anonymously
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {responses.map((r, i) => (
          <Card key={i} className="p-4">
            <CardContent>
              <p><b>Went Well:</b> {r.wentWell}</p>
              <p><b>Improve:</b> {r.improve}</p>
              <p><b>Action:</b> {r.action}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
