export default function Contact() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="mb-4">Email: info@utilapower.com | Phone: +504 0000 0000</p>

      <form className="max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea className="mt-1 w-full border rounded px-3 py-2 h-32" />
        </div>
        <div>
          <button type="button" className="bg-blue-700 text-white px-4 py-2 rounded">Send</button>
        </div>
      </form>
    </div>
  )
}
