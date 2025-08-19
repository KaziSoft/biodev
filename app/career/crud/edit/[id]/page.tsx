'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function EditJobPage() {
  const router = useRouter();
  const params = useParams();
  const [form, setForm] = useState({ title: '', location: '', description: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      const res = await fetch(`/api/jobs/${params.id}`);
      const data = await res.json();
      setForm(data);
      setLoading(false);
    };
    fetchJob();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`/api/jobs/${params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    router.push('/admin/jobs');
  };

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Edit Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full border p-2"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          className="w-full border p-2"
          rows={4}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
}