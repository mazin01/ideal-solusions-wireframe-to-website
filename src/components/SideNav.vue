<template>
  <nav class="w-fit h-screen p-4 drop-shadow-xl bg-white">
    <ul>
      <li
        class="flex items-center gap-2 my-4 px-3 py-2 rounded-md hover:bg-gray-100 font-semibold cursor-pointer"
      >
        <div class="w-6">
          <svg
            viewBox="0 -0.5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.25 9C20.25 8.58579 19.9142 8.25 19.5 8.25C19.0858 8.25 18.75 8.58579 18.75 9L20.25 9ZM11.5 18.25C11.0858 18.25 10.75 18.5858 10.75 19C10.75 19.4142 11.0858 19.75 11.5 19.75V18.25ZM18.75 9C18.75 9.41421 19.0858 9.75 19.5 9.75C19.9142 9.75 20.25 9.41421 20.25 9L18.75 9ZM11.5 4.25C11.0858 4.25 10.75 4.58579 10.75 5C10.75 5.41421 11.0858 5.75 11.5 5.75V4.25ZM19.5 9.75C19.9142 9.75 20.25 9.41421 20.25 9C20.25 8.58579 19.9142 8.25 19.5 8.25V9.75ZM11.5 8.25C11.0858 8.25 10.75 8.58579 10.75 9C10.75 9.41421 11.0858 9.75 11.5 9.75V8.25ZM6.25 12C6.25 11.5858 5.91421 11.25 5.5 11.25C5.08579 11.25 4.75 11.5858 4.75 12H6.25ZM11.5 19.75C11.9142 19.75 12.25 19.4142 12.25 19C12.25 18.5858 11.9142 18.25 11.5 18.25V19.75ZM4.75 12C4.75 12.4142 5.08579 12.75 5.5 12.75C5.91421 12.75 6.25 12.4142 6.25 12H4.75ZM11.5 5.75C11.9142 5.75 12.25 5.41421 12.25 5C12.25 4.58579 11.9142 4.25 11.5 4.25V5.75ZM5.5 11.25C5.08579 11.25 4.75 11.5858 4.75 12C4.75 12.4142 5.08579 12.75 5.5 12.75L5.5 11.25ZM11.5 12.75C11.9142 12.75 12.25 12.4142 12.25 12C12.25 11.5858 11.9142 11.25 11.5 11.25V12.75ZM12.25 12C12.25 11.5858 11.9142 11.25 11.5 11.25C11.0858 11.25 10.75 11.5858 10.75 12H12.25ZM10.75 19C10.75 19.4142 11.0858 19.75 11.5 19.75C11.9142 19.75 12.25 19.4142 12.25 19H10.75ZM10.75 12C10.75 12.4142 11.0858 12.75 11.5 12.75C11.9142 12.75 12.25 12.4142 12.25 12H10.75ZM12.25 9C12.25 8.58579 11.9142 8.25 11.5 8.25C11.0858 8.25 10.75 8.58579 10.75 9H12.25ZM12.25 5C12.25 4.58579 11.9142 4.25 11.5 4.25C11.0858 4.25 10.75 4.58579 10.75 5H12.25ZM10.75 9C10.75 9.41421 11.0858 9.75 11.5 9.75C11.9142 9.75 12.25 9.41421 12.25 9H10.75ZM18.75 9V15H20.25V9L18.75 9ZM18.75 15C18.75 16.7949 17.2949 18.25 15.5 18.25V19.75C18.1234 19.75 20.25 17.6234 20.25 15H18.75ZM15.5 18.25H11.5V19.75H15.5V18.25ZM20.25 9C20.25 6.37665 18.1234 4.25 15.5 4.25L15.5 5.75C17.2949 5.75 18.75 7.20507 18.75 9L20.25 9ZM15.5 4.25H11.5V5.75H15.5L15.5 4.25ZM19.5 8.25H11.5V9.75H19.5V8.25ZM4.75 12V15H6.25V12H4.75ZM4.75 15C4.75 17.6234 6.87665 19.75 9.5 19.75V18.25C7.70507 18.25 6.25 16.7949 6.25 15H4.75ZM9.5 19.75H11.5V18.25H9.5V19.75ZM6.25 12L6.25 9H4.75L4.75 12H6.25ZM6.25 9C6.25 7.20507 7.70507 5.75 9.5 5.75V4.25C6.87665 4.25 4.75 6.37665 4.75 9H6.25ZM9.5 5.75H11.5V4.25H9.5V5.75ZM5.5 12.75H11.5V11.25H5.5L5.5 12.75ZM10.75 12V19H12.25V12H10.75ZM12.25 12V9H10.75V12H12.25ZM10.75 5V9H12.25V5H10.75Z"
              fill="#000000"
            />
          </svg>
        </div>
        <div>Dashboard</div>
      </li>
      <li
        class="flex items-center gap-2 my-4 px-3 py-2 rounded-md bg-red-100 font-semibold cursor-pointer"
      >
        <div class="w-6">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
              stroke="#cc0000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="text-red-500">Users</div>
      </li>
      <li
        class="flex items-center gap-2 my-4 px-3 py-2 rounded-md hover:bg-gray-100 font-semibold cursor-pointer"
      >
        <div class="w-6">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9H13C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7H7Z"
              fill="#000000"
            />
            <path
              d="M6 12C6 11.4477 6.44772 11 7 11H13C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13H7C6.44772 13 6 12.5523 6 12Z"
              fill="#000000"
            />
            <path
              d="M7 15C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15H7Z"
              fill="#000000"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.625 21H18.375C20.3918 21 22 19.3435 22 17.3333V6.66667C22 4.65653 20.3918 3 18.375 3H5.625C3.60818 3 2 4.65653 2 6.66667V17.3333C2 19.3435 3.60818 21 5.625 21ZM5.625 5C4.74233 5 4 5.73129 4 6.66667V17.3333C4 18.2687 4.74233 19 5.625 19H14.375C15.2577 19 16 18.2687 16 17.3333V6.66667C16 5.73129 15.2577 5 14.375 5H5.625ZM18.375 19H17.6042C17.8575 18.4987 18 17.9317 18 17.3333V6.66667C18 6.06833 17.8575 5.50132 17.6042 5H18.375C19.2577 5 20 5.73129 20 6.66667V17.3333C20 18.2687 19.2577 19 18.375 19Z"
              fill="#000000"
            />
          </svg>
        </div>
        <div>Publications</div>
      </li>
      <li
        class="flex items-center gap-2 my-4 px-3 py-2 rounded-md hover:bg-gray-100 font-semibold cursor-pointer"
      >
        <div class="w-6">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.0498 7.0498H7.0598M10.5118 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10.5118C3 11.2455 3 11.6124 3.08289 11.9577C3.15638 12.2638 3.27759 12.5564 3.44208 12.8249C3.6276 13.1276 3.88703 13.387 4.40589 13.9059L9.10589 18.6059C10.2939 19.7939 10.888 20.388 11.5729 20.6105C12.1755 20.8063 12.8245 20.8063 13.4271 20.6105C14.112 20.388 14.7061 19.7939 15.8941 18.6059L18.6059 15.8941C19.7939 14.7061 20.388 14.112 20.6105 13.4271C20.8063 12.8245 20.8063 12.1755 20.6105 11.5729C20.388 10.888 19.7939 10.2939 18.6059 9.10589L13.9059 4.40589C13.387 3.88703 13.1276 3.6276 12.8249 3.44208C12.5564 3.27759 12.2638 3.15638 11.9577 3.08289C11.6124 3 11.2455 3 10.5118 3ZM7.5498 7.0498C7.5498 7.32595 7.32595 7.5498 7.0498 7.5498C6.77366 7.5498 6.5498 7.32595 6.5498 7.0498C6.5498 6.77366 6.77366 6.5498 7.0498 6.5498C7.32595 6.5498 7.5498 6.77366 7.5498 7.0498Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div>Tags</div>
      </li>
      <li
        class="flex items-center gap-2 my-4 px-3 py-2 rounded-md hover:bg-gray-100 font-semibold cursor-pointer"
      >
        <div class="w-6">
          <svg
            fill="#000000"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5,12a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V13A1,1,0,0,0,5,12ZM10,2A1,1,0,0,0,9,3V21a1,1,0,0,0,2,0V3A1,1,0,0,0,10,2ZM20,16a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V17A1,1,0,0,0,20,16ZM15,8a1,1,0,0,0-1,1V21a1,1,0,0,0,2,0V9A1,1,0,0,0,15,8Z"
            />
          </svg>
        </div>
        <div>Analytics</div>
      </li>
      <div class="w-full border-b"></div>
      <li
        class="flex items-center gap-2 my-4 px-3 py-2 rounded-md hover:bg-gray-100 font-semibold cursor-pointer"
      >
        <div class="w-6">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div>My Profile</div>
      </li>
      <li
        class="flex items-center gap-2 my-4 px-3 py-2 rounded-md hover:bg-gray-100 font-semibold cursor-pointer"
      >
        <div class="w-6">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div>Account Settings</div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
svg {
  opacity: 0.4;
}
</style>