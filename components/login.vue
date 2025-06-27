<template>
        <div class="w-full max-w-sm p-4 bg-orange-300 border border-gray-700 rounded-lg shadow-sm sm:p-6 md:p-8">
            <form class="space-y-6" action="#">
                <slot name="header">
                    <h5 class="text-xl font-medium text-white">Sign in to our platform</h5>
                </slot>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                    <input type="email" name="email" id="email" class=" bg-white border border-gray-600 text-black text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 placeholder-gray-400" placeholder="name@company.com" required />
                </div>
                <div>   
                    <label for="password" class="block mb-2 text-sm font-medium text-white">Your password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" class=" bg-white border border-gray-600 text-black text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 placeholder-gray-400" required />
                </div>
                <div class="flex items-start">
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-600 rounded-sm bg-gray-700 focus:ring-3 focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800" required />
                        </div>
                        <label for="remember" class="ms-2 text-sm font-medium text-gray-300">Remember me</label>
                    </div>
                    <a href="#" class="ms-auto text-sm text-blue-500 hover:underline">Lost Password?</a>
                </div>
                <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                <div class="text-sm font-medium text-gray-300">
                    Not registered? <a href="#" class="text-blue-500 hover:underline">Create account</a>
                </div>
                <slot name="footer" />
            </form>
        </div>
    </template>