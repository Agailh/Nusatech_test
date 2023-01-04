export default function login() {
  return (
    <div className="h-screen bg-gray-800 flex-item-center justify-between">
      <div className="w-full max-w-md m-auto bg-slate-700 flex-item-center">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-left">SignUp</h1>
        <h2 className="">Use your OpenID to SignUp </h2>
        <input id="email" name="email" type="email" />
        <input id="password" name="password" type="password" />
        <input id="confirm-passwiord" name="confirm-password" type="password" />
      </div>
    </div>
  );
}
