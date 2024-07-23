<template> 
  <nav class="uk-navbar-container bg-blood-red mb-0   " id="nav" >
    <div class="uk-container mb-0 ">
        
        <div uk-navbar  class="" >
            <div class="uk-navbar-left cursor-pointer ">
            <NuxtLink to="/" class="hover:no-underline uk-logo size-16 " > 
                <img src="/logo.png" class="">
            </NuxtLink>
              

            </div>

            <div class="uk-navbar-right   ">
                <a class="uk-navbar-toggle uk-navbar-toggle-animate  " uk-navbar-toggle-icon href="#"></a>
                <div  class="uk-dropbar uk-dropbar-top " id="drop"
                uk-drop="stretch: true; animation: reveal-top; animate-out: true; duration: 700">
                    <ul class=" uk-navbar-dropdown-nav text-xl  " uk-nav>
                       <li v-for="link in Links" :key="link.name">
                         <router-link class="text-white" :to="link.path"   > {{link.name}} </router-link>
                       </li>
                       
                    </ul>
                </div>
                <ul class="uk-navbar-nav uk-visible@s ">
                    <li class="" v-for="link in Links" :key="link.name">
                        <NuxtLink :to="link.path" class="  relative group cursor-pointer text-white font-bold text-[18px] "
                        >   
                            {{link.name}}
                            <div
                                    class="absolute   w-full h-1 bg-white top-[76px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500">
                            </div>
                            <div
                                    class="absolute w-full h-0.5 bg-gold top-14 scale-x-100 transition-transform duration-500">
                            </div>
                        </NuxtLink>
                       
                    </li>
                    

                </ul>

            </div>

        </div>
    </div>
  </nav>

</template>

<script setup >
   
    const Links = [
                
                {name : "Home" , path: "/"},
               
            ];
    
  


</script>