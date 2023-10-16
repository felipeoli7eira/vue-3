<script setup>


async function login()
{
  console.log('login...')
}

</script>

<template>
  <div class="login-form d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
    <form class="d-flex flex-column align-items-center" method="POST">
        <img src="@/assets/img/techlogotipo-2.png" class="d-inline-block mb-4" width="200">

        <div class="d-flex align-items-center mb-2 border p-1 px-4 bg-body rounded-pill">
            <img src="@/assets/svg/user.svg">
            <input name="email" class="form-control border-0 bg-none shadow-none" min="6" max="191" autofocus type="email" autocomplete="off" placeholder="E-mail" value="">
        </div>

        <div class="d-flex align-items-center mb-2 border p-1 px-4 bg-body rounded-pill">
            <img src="@/assets/svg/lock.svg">
            <input name="password" id="password" class="form-control border-0 bg-none shadow-none" min="6" max="191" type="password" placeholder="••••••" autocomplete="current-password">
        </div>

        <!-- <p class="ps-3 m-0 fw-light text-center text-danger mb-2 w-100">Dados incorretos ou usuário não encontrado</p> -->

        <div class="d-grid w-100 mt-5">
          <button @click="login" class="btn btn-primary rounded-pill p-2 fw-bold shadow-sm" type="button">LOGIN</button>
        </div>
    </form>
  </div>
</template>


<style scoped>
.btn-primary
{
  background-color: #0c3992;
  border-color: #123f99;
}

  .form-control
  {
    background-color: #fff !important;
    color: #1f1f1f !important;
  }

  .form-control::placeholder
  {
    color: rgba(41, 41, 41, 0.671) !important
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active{
    background-color: #fff
  }
</style>