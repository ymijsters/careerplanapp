import React from "react";

export const AuthAside = () => {
  return (
    <div
      class='d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2'
      style={{
        backgroundImage: 'url("../../img/auth-bg.png")',
      }}
    >
      <div class='d-flex flex-column flex-center py-15 px-5 px-md-15 w-100'>
        <a href='../../demo11/dist/index.html' class='mb-12'>
          <img
            alt='Logo'
            src='assets/media/logos/custom-1.png'
            class='h-75px'
          />
        </a>
        <img
          class='mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20'
          src='assets/media/misc/auth-screens.png'
          alt=''
        />
        <h1 class='text-white fs-2qx fw-bolder text-center mb-7'>
          Fast, Efficient and Productive
        </h1>
        <div class='text-white fs-base text-center'>
          In this kind of post,
          <a href='#' class='opacity-75-hover text-warning fw-bold me-1'>
            the blogger
          </a>
          introduces a person they’ve interviewed
          <br />
          and provides some background information about
          <a href='#' class='opacity-75-hover text-warning fw-bold me-1'>
            the interviewee
          </a>
          and their
          <br />
          work following this is a transcript of the interview.
        </div>
      </div>
    </div>
  );
};
