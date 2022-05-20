<script context="module">
  export async function load({ page, fetch, session, context }) {
    console.log(session);
    if (session) {
      return {
        status: 302,
        redirect: "/blog/",
      };
    }
    return {};
  }
</script>

<script>
  import Animate from "$lib/components/Animate.svelte";

  let password = "yi0ohCmGfLc8xGQRou3fCxd!";
  let username = "farmbayadmin";

  async function login() {
    let body = { username: username, password: password };
    let res = await fetch("/auth/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(data);
  }
</script>

<Animate>
  <section class="w-full bg-brandgold py-20">
    <div class="w-full max-w-screen-xl  mx-auto px-10">
      <div class="">
        <div class="">
          <input bind:value={username} placeholder="username" type="text" />
          <input bind:value={password} placeholder="password" type="password" />
        </div>
        <div>
          <button on:click={login} class="bg-white"> Login </button>
        </div>
      </div>
    </div>
  </section>
</Animate>
