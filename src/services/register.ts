interface UserData {
  name: string;
  email: string;
  password: string;
}

export const handleSignup = async (e: SubmitEvent): Promise<string> => {
  e.preventDefault();

  // Crear un objeto formData con los datos del formulario
  const formElement = e.target as HTMLFormElement;
  const formData = new FormData(formElement);

  // Conversión de formData en un objeto manualmente
  const data: UserData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  try {
    // Solicitud POST al backend para registrar al usuario
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const newUser = await response.json();
    console.log(newUser);
    
    if (response.ok) {
      window.location.href = "/login"; // Refirige al login tras el registro
    }
  } catch (error) {
    console.error(error);
  }
};


// Esta función se encarga de inicializar el formulario
export const initSignupForm = () => {
  const form = document.getElementById("signupForm");
  if (form) {
    form.addEventListener("submit", handleSignup);
  }
};
