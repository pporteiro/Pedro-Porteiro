import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Form = ({ setModalOn, setChoice, createOrder }) => {
  const { user, loadUserData, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("user", user);

    const obj = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };
    loadUserData(obj);
    createOrder(obj);
    clearCart();
    navigate("/checkout-success");
  };

  return (
    <>
      <div className="bg-zinc-200 opacity-90 fixed inset-0 z-50"> </div>

      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
      >
        <div className="flex justify-center items-center relative p-4 w-full max-w-md h-full md:h-auto bg-white rounded-lg shadow">
          <form onSubmit={handleSubmit}>
            <div className="py-6 px-6 opacity-100 lg:px-8">
              <div>
                <label className="block mb-2 mt-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Name
                </label>
                <input
                  name="name"
                  id="name"
                  placeholder="Your name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 mt-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 mt-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Phone
                </label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="+54 0 1234 5678"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Complete checkout
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
