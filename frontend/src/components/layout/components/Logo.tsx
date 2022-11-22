interface Props {
  mobile?: boolean
}

export const Logo: React.FC<Props> = ({ mobile = true }) => {
  return (
    <svg
      width={mobile ? '222' : '105'}
      height={mobile ? '39' : '29'}
      viewBox='0 0 222 39'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 1.62712C4.60634 1.62712 8.26582 1.62712 10.9784 1.62712C13.7081 1.62712 15.363 1.63559 15.9431 1.65254C18.468 1.77119 20.2508 2.0678 21.2915 2.54237C22.3322 3 23.1597 3.51695 23.7738 4.09322C25.0875 5.38136 25.7443 6.94068 25.7443 8.77119C25.7443 10.5847 25.1046 12.178 23.825 13.5508C23.4326 13.9746 22.9805 14.339 22.4687 14.6441C25.2496 15.1525 27.5271 16.3136 29.3014 18.1271C31.2293 20.0932 32.1932 22.4915 32.1932 25.322C32.1932 28.2034 31.2975 30.6864 29.5062 32.7712C26.9983 35.6525 23.1255 37.2288 17.888 37.5C16.5572 37.5678 15.2436 37.6017 13.947 37.6017H0V1.62712ZM16.7875 14.1356L18.0927 14.2881H18.5021C19.8499 14.2881 21.0186 13.7966 22.0081 12.8136C23.0658 11.7627 23.5947 10.4746 23.5947 8.94915C23.5947 7.08475 22.7843 5.65254 21.1636 4.65254C20.3447 4.14407 19.5258 3.84746 18.7069 3.76271C17.905 3.66102 17.2738 3.59322 16.8131 3.55932C15.8578 3.49153 14.6038 3.45763 13.0513 3.45763V35.7203H15.8919C18.7922 35.7203 21.155 35.3644 22.9805 34.6525C25.1643 33.9068 26.8959 32.7034 28.1754 31.0424C29.3867 29.4661 29.9924 27.8136 29.9924 26.0847C29.9924 24.3559 29.7365 22.8983 29.2247 21.7119C28.7129 20.5254 27.9707 19.5169 26.9983 18.6864C25.0193 16.9746 22.264 16.1186 18.7324 16.1186L16.9667 16.2712C16.4207 16.2712 16.0198 16.161 15.7639 15.9407C15.508 15.7203 15.3801 15.4661 15.3801 15.178C15.3801 14.4831 15.8492 14.1356 16.7875 14.1356Z'
        fill='#FBFAF8'
      />
      <path
        d='M55.7367 25.2712L57.8352 25.4237C60.8378 25.4237 63.3884 24.3814 65.4868 22.2966C67.5852 20.2119 68.6345 17.6186 68.6345 14.5169C68.6345 10.4492 66.8346 7.4322 63.2348 5.4661C61.2558 4.38136 59.1403 3.75424 56.8883 3.58475C55.9329 3.5 55.0458 3.45763 54.2269 3.45763H52.4867C52.1284 3.45763 51.8128 3.4661 51.5398 3.48305V37.6017H38.4885V1.62712C42.4807 1.62712 45.7137 1.62712 48.1874 1.62712C50.6612 1.62712 52.2734 1.63559 53.0241 1.65254C53.7748 1.66949 54.4401 1.69492 55.0202 1.72881C55.6173 1.74576 56.1718 1.77119 56.6836 1.80508C57.4342 1.87288 58.492 2.0339 59.8568 2.28814C61.2387 2.54237 62.6036 3.02542 63.9514 3.73729C65.2991 4.44915 66.4593 5.33051 67.4317 6.38136C69.5301 8.61864 70.5794 11.2797 70.5794 14.3644C70.5794 17.4153 69.6069 20.1102 67.662 22.4492C65.6659 24.839 63.0045 26.3814 59.6777 27.0763C61.2643 31.9576 63.286 34.8729 65.7427 35.822C66.4934 36.1102 67.244 36.2542 67.9947 36.2542L70.0164 35.7712C70.6476 35.7712 70.9632 36.0932 70.9632 36.7373C70.9632 37.6356 69.9055 38.0847 67.79 38.0847C66.2545 38.0847 64.847 37.661 63.5675 36.8136C61.5714 35.6271 59.8739 33.322 58.4749 29.8983L57.7328 28.0932C57.6134 27.8051 57.5025 27.6271 57.4001 27.5593C57.3148 27.4915 57.1527 27.4576 56.9139 27.4576C56.6921 27.4576 56.4959 27.4746 56.3253 27.5085L55.7111 27.5339C55.0287 27.5339 54.5595 27.4068 54.3036 27.1525C54.0648 26.8983 53.9454 26.6356 53.9454 26.3644C53.9454 25.6356 54.5425 25.2712 55.7367 25.2712Z'
        fill='#FBFAF8'
      />
      <path
        d='M99.369 35.4153C100.239 35.4153 100.674 35.7542 100.674 36.4322C100.674 36.7373 100.486 37.0085 100.111 37.2458C99.7358 37.4831 99.0875 37.6017 98.1662 37.6017H76.4908V1.62712C83.2127 1.62712 89.9345 1.62712 96.6564 1.62712L98.7548 1.55085C100.034 1.55085 100.674 1.92373 100.674 2.66949C100.674 2.95763 100.563 3.22881 100.341 3.48305C100.137 3.72034 99.8979 3.83898 99.6249 3.83898C99.1813 3.83898 98.7122 3.78814 98.2174 3.68644C97.4838 3.5339 96.4772 3.45763 95.1977 3.45763H89.5421V11.2119H94.1997C94.1997 11.2119 95.2489 11.1695 97.3473 11.0847C97.7226 11.0847 98.0383 11.178 98.2942 11.3644C98.5671 11.5339 98.7036 11.7797 98.7036 12.1017C98.7036 12.8136 98.2259 13.1695 97.2705 13.1695L96.1701 13.1441C95.6071 13.0932 95.138 13.0678 94.7626 13.0678H89.5421V35.7458H95.1977C96.4602 35.7458 97.3559 35.6949 97.8847 35.5932C98.516 35.4746 99.0107 35.4153 99.369 35.4153Z'
        fill='#FBFAF8'
      />
      <path
        d='M152.419 2.4661C152.419 2.72034 152.359 3.0339 152.24 3.40678C151.83 4.50847 151.463 5.4661 151.139 6.27966L137.576 39L127.928 17.5932L117.922 39L102.773 1.62712H116.796L123.987 20.6695L133.737 0L142.822 20.6186L149.22 5.69492C149.442 5.13559 149.629 4.58475 149.783 4.04237L150.218 2.49153C150.406 1.72881 150.815 1.34746 151.446 1.34746C152.095 1.34746 152.419 1.72034 152.419 2.4661Z'
        fill='#FBFAF8'
      />
      <path
        d='M180.236 35.4153C181.106 35.4153 181.541 35.7542 181.541 36.4322C181.541 36.7373 181.353 37.0085 180.978 37.2458C180.603 37.4831 179.954 37.6017 179.033 37.6017H157.358V1.62712C164.08 1.62712 170.801 1.62712 177.523 1.62712L179.622 1.55085C180.901 1.55085 181.541 1.92373 181.541 2.66949C181.541 2.95763 181.43 3.22881 181.208 3.48305C181.004 3.72034 180.765 3.83898 180.492 3.83898C180.048 3.83898 179.579 3.78814 179.084 3.68644C178.351 3.5339 177.344 3.45763 176.065 3.45763H170.409V11.2119H175.067C175.067 11.2119 176.116 11.1695 178.214 11.0847C178.59 11.0847 178.905 11.178 179.161 11.3644C179.434 11.5339 179.57 11.7797 179.57 12.1017C179.57 12.8136 179.093 13.1695 178.137 13.1695L177.037 13.1441C176.474 13.0932 176.005 13.0678 175.63 13.0678H170.409V35.7458H176.065C177.327 35.7458 178.223 35.6949 178.752 35.5932C179.383 35.4746 179.878 35.4153 180.236 35.4153Z'
        fill='#FBFAF8'
      />
      <path
        d='M188.399 1.62712H199.045C204.01 1.62712 207.652 1.97458 209.972 2.66949C212.617 3.48305 214.655 4.52542 216.089 5.79661C217.539 7.0678 218.673 8.38136 219.492 9.73729C221.164 12.5 222 15.6356 222 19.1441C222 24.6695 220.004 29.1441 216.012 32.5678C213.18 35.0254 209.844 36.5424 206.006 37.1186C203.873 37.4407 200.888 37.6017 197.049 37.6017H188.399V1.62712ZM201.451 35.4915C201.724 35.5085 201.971 35.5169 202.193 35.5169H202.781C207.405 35.5169 211.354 34.0847 214.63 31.2203C218.093 28.2034 219.825 24.1949 219.825 19.1949C219.825 16.0424 219.066 13.2034 217.547 10.678C215.346 7 211.866 4.77119 207.106 3.99153C205.554 3.73729 203.668 3.59322 201.451 3.55932V35.4915Z'
        fill='#FBFAF8'
      />
    </svg>
  )
}
