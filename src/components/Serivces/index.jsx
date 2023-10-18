import React from "react";
import Card from "../Card";

export default function Services() {
  const cardData = [
    {
      imageURL:
        "data:image/jpeg;base64,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",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 bg-secondary p-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
          />
        </svg>
      ),
      title: "Noteworthy technology",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      imageURL:
        "data:image/jpeg;base64,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",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 bg-secondary p-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
          />
        </svg>
      ),
      title: "Noteworthy technology",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      imageURL:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsApAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwABBAUGBwj/xAA8EAABAwIEBAQDBAcJAAAAAAABAAIDBBEFEiExBhNBYSJRcYEUkbEHMnKhIyRSgrLB0RVCU1RiZJKz4f/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMFBAb/xAAfEQEAAwEAAwADAQAAAAAAAAAAAQIREgMhMQQTQSL/2gAMAwEAAhEDEQA/APNByIOWUPRh6+k6fLTVozJrM24Fwsgeja8g6GyqJTy1FwOh/NCdChbIHaOHursBsU9TysFEHJRJG6gcnqJqddXmScyK6elhoKl0sFXdPSwxRCCruglqKrq0BFFFEBFFFEBFFFEBwg9EHrKwlxs0XKc5jmtzG2m68cWdOaHtejzW3WaMuOreicZcoDsxf6qosiaHNkOW10QkPmgMbY3kVMzWvBsWRjO4Hv0HzViaAHL8McvV3MOcfy+YS/bA/TJhffqrzIHxFrObE4SxftNFi3s4dPp6oA660reJ+MreOYPDlYclxRySDMBZl/vuIa0e509lbg6N+R7S1w3B+vp3VReNTNJxpfG+OOOR1ssgu3VAHJOburDlWs+Tw5XdJDkQcnpYaDdWCl5lMyep5Pa5ocMwJHWyhIubbdErMrBTLDFEIN1AUEJRVdRAedZaE6ElrtL22Teawi2Ya90q9xY7JMkRGrdvJc7p25hsYQ1vh0urdlI2CwxuLdQd1ozi+W9ijpPLZURPnxmWngaDJNVuYwE2u5zyBr01K9nif2b4jTxvfStkfkjLst2uzu18I2PQf8gvFTMFXPJNTOJkke55hcbPBJv4f2vr2RMxjFIi4NxGtbfRw57xt79lhbqZ9S3rx/YOqKarwjFXUdUx0NTE8Me2997exBHzUYQyascGNPLaS1rhcDxtbt6EpOarrZ21lZK94uLzzvJvboCd9thdFHI2aWra1zQZWkR5ja5ztda57Ba1mcllesbCRtqMQrIYQ58kkjg1t7nLfsNh6DomOf8ADTPo53MqIo3lofGfu+ZaT07EfJdbg7HMO4dqJpsSop5aoECNzGDNDob7kb3/ACWLiWrw7FMbFTgkMrGT6vieCXGS5JO537bWUd26xU+OOfvtjkHKmkjJuWOLb+dioHoalr3z1UrGl0bZnXcNtTokh69tbPBNGrOiDlmDxsja5XrPloDkQcOqzB6MOTiUzVozKw5Ja4WVtcQq1M1PB0V3SQ6xurBunqZqbmUS7qILHJDEUcL5HhkbQ5x2BNltdBlvcWV0rQKgfhf/AAlcXt249y55ipYjdzjO79iPwtH7x1PsB6qxXSscRHy2R6XjawZT63397rXw7QQYljuH0NS8shqJ2xvcDbQ/12919Hx7HpeHcZ/sPDcJw5lJ4GxQOgJdNmNjltodNST5qLeWYeitImNfLv1efYink8iSY3eh3b739QimqaiJ+WojjfK0DK+Roe4Dprs4et+y9B9qOFUWDcRMZh7GwsqKdszqdm0TiSDYdAbbeq8vXvsaYf7aP6LWl9+s705+DjE1bN98ySnYONyfT+iIUs13Nswlps4Z26djquz9n2LUmHYpVw1VV8DJXUj6anrrD9WkNrO7Dv2C9rHU43DhvEbsSxCiwXEo6mmY6tDTy5GgaO2dcuHW3yRbzTWciBXwxaNfOGOeY8lSI5YmaD9M1rmnyDtfkQR2SnyzBjooGxwxH7zWzNu78Rvc/TsvZ1mMVlLwxhNNHTCuixLDq2SrjaweJ5kH6c2G7bk9N16iiijPFGJDJHYY2wAuaLD9Rv8AK+qU+bPeKjwb618hYJwwsafA7UgPBB/NWIprEiNxt2X0nEZpKKiZWNNHLWuZhfOq4omOjqHPL2ve3SxBBtew222WfEKumqDxTLVRUvxGC1ErqQchoFnsdExpsNbPsVpH5Mz/ABnb8Wsf187D0YesrXaanVGHr19PHNGoPRZllD7I2yWVRZnNWpslkYkWNr0xridAq6TNGrPfdEH3Cyh1uoRBycSiatOZWkZu6pVqeVyVgdqTqhhq4452vkvksQcupFwR/NcP4k+anxHdcXHaimOs6nfbPTOE4GuaInM3uW7j1tbuu/B9pfEMVOyN76SoljFmVE0AMg9xYX9l4kVBa4Oa4tcNiDYhNdicx8TmwyS9JZIg549+vuClNNaxOOhWz1eJ1D8QxWpOeY5nTTfef+Fo39hYdlgralks7OWCGMjbGM25AG58lHxlshkxKZ5mO8QOaQ/ids30Nz2CttdMXcqkY1jP8BjMwd+IG+b3v2srrOFNZl0+GMchwh9cyspmVdHW05p6imeXN5jT5OGrf/V36jj2nrRXRYhhcFVS1Riy07szRG2MWaLh1z53XjSyCaTlSxvoqjNYgNJZfyLT4m/n6BJp4M08zJn5GwAmQtGY6ODbDvchPKz7kRNojIevh4ve7C3YXR0LObyZ6emmjgLpIIJTdzGjNr0AJ10TJ/tDrPi4ZvhYYKiKXm1BFPlNRLyuUHPGfSzTsLLi4JhGK8ROko8Bog2FoHOcXhrQOmd5316D5JWM0GI4LWsw/iGku/KDG4yBxLdrskF7jsbjsFMcaf8ArGyTiuaTC6bDiwGGnjpo2kMAcRA5zmX1PVxukz8QSVD8Xe5hvirg+psQLWdmGXTTVcGpZyKuaIEkRyObc9bGyAP0sdltFax8Y2m0tIcbIw8LMXWsL9FYd3WvTLlqD0eYWG6yB6ZmuAqiyJo0h3dMDwO/osYejZJY7qosiaNQdZHzNLdFluRrY287Kw/ur6RNWrOos+dRPpPLhZlM5S7qXXNdkzOhLyXW6WS7lUCSSQkWOpijrYlXkf5mX+Mr9HcFcO4XhXCtG6mp44ppqVsk9TZpe5xaCSXdfTbRfnSZsNbVTT0tSzNLI6QxT/o3NzOJsCfCd/P2XSouIuK8OYzD6PEcQgY1ojjgGwYPIEaDXcfRZ3jfjSMhnxeujxLiWqrYAeVPVl7LuLrtzaG58xqkMP6xi34H/wDcxJ5tPRG4LKiqBuLG8UZHW/8AfP5eqyxVc8Uz5o5SJH3zGwOa+puCLH0Vx6hEx7e94QxPCZuEa/h/EMRhwypfVtqop5weXKA0DI+2vTbyWLjPE6PFarBsKwV0lXBhVOYG1BbYzuNi5wHRoy/VeVFVSVDgKiI0zjvJB4mn9wnT2PsgqK0GJ0FK0xQH71zd8vlmPl/pGg77qYp7OZ9Dr5RJX1TmODmOmeQR1FzZJDlnDkQcvREsZqeCUWZIDkQed7p6manh6MP039llDkQcq6TNW8zQmmY0RkTBxLn30I8kAcsocmZ25QAPF1KfSOHQbXSii+F8PLLsx01ukh6ztcTp+SIOVdImjTmuqSc4VKui4ctUoovE6CnGwUaLDVU5TMkYimCpqGQmnFRMIDvEJCGH93ZJzqibo9Ay91TnWCq9ghT0JcqwUPVRBDuoCgv0Vp6MMurDku6gKNLDg5WHDzSgUWbsFWpw3MrDu6SHEK85T1PLQHEHqFYckZ/NWHKui5aMyiTnUT1PLNmCmYIFLLzvUIu8kKiiAimnVQqkghN1FFEwl1d1SiAIOIBA2KpUN1aCxFFFExiaqwUIVoIea+6l0CtPRg7ogUsK0aWGZlEtRPSx/9k=",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 bg-secondary p-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
          />
        </svg>
      ),
      title: "Noteworthy technology",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      imageURL:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsApAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwABBAUGBwj/xAA8EAABAwIEBAQDBAcJAAAAAAABAAIDBBEFEiExBhNBYSJRcYEUkbEHMnKhIyRSgrLB0RVCU1RiZJKz4f/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMFBAb/xAAfEQEAAwEAAwADAQAAAAAAAAAAAQIREgMhMQQTQSL/2gAMAwEAAhEDEQA/APNByIOWUPRh6+k6fLTVozJrM24Fwsgeja8g6GyqJTy1FwOh/NCdChbIHaOHursBsU9TysFEHJRJG6gcnqJqddXmScyK6elhoKl0sFXdPSwxRCCruglqKrq0BFFFEBFFFEBFFFEBwg9EHrKwlxs0XKc5jmtzG2m68cWdOaHtejzW3WaMuOreicZcoDsxf6qosiaHNkOW10QkPmgMbY3kVMzWvBsWRjO4Hv0HzViaAHL8McvV3MOcfy+YS/bA/TJhffqrzIHxFrObE4SxftNFi3s4dPp6oA660reJ+MreOYPDlYclxRySDMBZl/vuIa0e509lbg6N+R7S1w3B+vp3VReNTNJxpfG+OOOR1ssgu3VAHJOburDlWs+Tw5XdJDkQcnpYaDdWCl5lMyep5Pa5ocMwJHWyhIubbdErMrBTLDFEIN1AUEJRVdRAedZaE6ElrtL22Teawi2Ya90q9xY7JMkRGrdvJc7p25hsYQ1vh0urdlI2CwxuLdQd1ozi+W9ijpPLZURPnxmWngaDJNVuYwE2u5zyBr01K9nif2b4jTxvfStkfkjLst2uzu18I2PQf8gvFTMFXPJNTOJkke55hcbPBJv4f2vr2RMxjFIi4NxGtbfRw57xt79lhbqZ9S3rx/YOqKarwjFXUdUx0NTE8Me2997exBHzUYQyascGNPLaS1rhcDxtbt6EpOarrZ21lZK94uLzzvJvboCd9thdFHI2aWra1zQZWkR5ja5ztda57Ba1mcllesbCRtqMQrIYQ58kkjg1t7nLfsNh6DomOf8ADTPo53MqIo3lofGfu+ZaT07EfJdbg7HMO4dqJpsSop5aoECNzGDNDob7kb3/ACWLiWrw7FMbFTgkMrGT6vieCXGS5JO537bWUd26xU+OOfvtjkHKmkjJuWOLb+dioHoalr3z1UrGl0bZnXcNtTokh69tbPBNGrOiDlmDxsja5XrPloDkQcOqzB6MOTiUzVozKw5Ja4WVtcQq1M1PB0V3SQ6xurBunqZqbmUS7qILHJDEUcL5HhkbQ5x2BNltdBlvcWV0rQKgfhf/AAlcXt249y55ipYjdzjO79iPwtH7x1PsB6qxXSscRHy2R6XjawZT63397rXw7QQYljuH0NS8shqJ2xvcDbQ/12919Hx7HpeHcZ/sPDcJw5lJ4GxQOgJdNmNjltodNST5qLeWYeitImNfLv1efYink8iSY3eh3b739QimqaiJ+WojjfK0DK+Roe4Dprs4et+y9B9qOFUWDcRMZh7GwsqKdszqdm0TiSDYdAbbeq8vXvsaYf7aP6LWl9+s705+DjE1bN98ySnYONyfT+iIUs13Nswlps4Z26djquz9n2LUmHYpVw1VV8DJXUj6anrrD9WkNrO7Dv2C9rHU43DhvEbsSxCiwXEo6mmY6tDTy5GgaO2dcuHW3yRbzTWciBXwxaNfOGOeY8lSI5YmaD9M1rmnyDtfkQR2SnyzBjooGxwxH7zWzNu78Rvc/TsvZ1mMVlLwxhNNHTCuixLDq2SrjaweJ5kH6c2G7bk9N16iiijPFGJDJHYY2wAuaLD9Rv8AK+qU+bPeKjwb618hYJwwsafA7UgPBB/NWIprEiNxt2X0nEZpKKiZWNNHLWuZhfOq4omOjqHPL2ve3SxBBtew222WfEKumqDxTLVRUvxGC1ErqQchoFnsdExpsNbPsVpH5Mz/ABnb8Wsf187D0YesrXaanVGHr19PHNGoPRZllD7I2yWVRZnNWpslkYkWNr0xridAq6TNGrPfdEH3Cyh1uoRBycSiatOZWkZu6pVqeVyVgdqTqhhq4452vkvksQcupFwR/NcP4k+anxHdcXHaimOs6nfbPTOE4GuaInM3uW7j1tbuu/B9pfEMVOyN76SoljFmVE0AMg9xYX9l4kVBa4Oa4tcNiDYhNdicx8TmwyS9JZIg549+vuClNNaxOOhWz1eJ1D8QxWpOeY5nTTfef+Fo39hYdlgralks7OWCGMjbGM25AG58lHxlshkxKZ5mO8QOaQ/ids30Nz2CttdMXcqkY1jP8BjMwd+IG+b3v2srrOFNZl0+GMchwh9cyspmVdHW05p6imeXN5jT5OGrf/V36jj2nrRXRYhhcFVS1Riy07szRG2MWaLh1z53XjSyCaTlSxvoqjNYgNJZfyLT4m/n6BJp4M08zJn5GwAmQtGY6ODbDvchPKz7kRNojIevh4ve7C3YXR0LObyZ6emmjgLpIIJTdzGjNr0AJ10TJ/tDrPi4ZvhYYKiKXm1BFPlNRLyuUHPGfSzTsLLi4JhGK8ROko8Bog2FoHOcXhrQOmd5316D5JWM0GI4LWsw/iGku/KDG4yBxLdrskF7jsbjsFMcaf8ArGyTiuaTC6bDiwGGnjpo2kMAcRA5zmX1PVxukz8QSVD8Xe5hvirg+psQLWdmGXTTVcGpZyKuaIEkRyObc9bGyAP0sdltFax8Y2m0tIcbIw8LMXWsL9FYd3WvTLlqD0eYWG6yB6ZmuAqiyJo0h3dMDwO/osYejZJY7qosiaNQdZHzNLdFluRrY287Kw/ur6RNWrOos+dRPpPLhZlM5S7qXXNdkzOhLyXW6WS7lUCSSQkWOpijrYlXkf5mX+Mr9HcFcO4XhXCtG6mp44ppqVsk9TZpe5xaCSXdfTbRfnSZsNbVTT0tSzNLI6QxT/o3NzOJsCfCd/P2XSouIuK8OYzD6PEcQgY1ojjgGwYPIEaDXcfRZ3jfjSMhnxeujxLiWqrYAeVPVl7LuLrtzaG58xqkMP6xi34H/wDcxJ5tPRG4LKiqBuLG8UZHW/8AfP5eqyxVc8Uz5o5SJH3zGwOa+puCLH0Vx6hEx7e94QxPCZuEa/h/EMRhwypfVtqop5weXKA0DI+2vTbyWLjPE6PFarBsKwV0lXBhVOYG1BbYzuNi5wHRoy/VeVFVSVDgKiI0zjvJB4mn9wnT2PsgqK0GJ0FK0xQH71zd8vlmPl/pGg77qYp7OZ9Dr5RJX1TmODmOmeQR1FzZJDlnDkQcvREsZqeCUWZIDkQed7p6manh6MP039llDkQcq6TNW8zQmmY0RkTBxLn30I8kAcsocmZ25QAPF1KfSOHQbXSii+F8PLLsx01ukh6ztcTp+SIOVdImjTmuqSc4VKui4ctUoovE6CnGwUaLDVU5TMkYimCpqGQmnFRMIDvEJCGH93ZJzqibo9Ay91TnWCq9ghT0JcqwUPVRBDuoCgv0Vp6MMurDku6gKNLDg5WHDzSgUWbsFWpw3MrDu6SHEK85T1PLQHEHqFYckZ/NWHKui5aMyiTnUT1PLNmCmYIFLLzvUIu8kKiiAimnVQqkghN1FFEwl1d1SiAIOIBA2KpUN1aCxFFFExiaqwUIVoIea+6l0CtPRg7ogUsK0aWGZlEtRPSx/9k=",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 bg-secondary p-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
          />
        </svg>
      ),
      title: "Noteworthy technology",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      imageURL:
        "data:image/jpeg;base64,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",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 bg-secondary p-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
          />
        </svg>
      ),
      title: "Noteworthy technology",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      imageURL:
        "data:image/jpeg;base64,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",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 bg-secondary p-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
          />
        </svg>
      ),
      title: "Noteworthy technology",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
  ];

  return (
    <div>
      <div className="my-10  flex justify-center items-center flex-col text-center">
        <h2 className="font-bold text-2xl text-secondary">OUR SERVICES</h2>
        <h4 className="pt-4 font-bold text-4xl text-primary">
          PREMIUM SECURITY SERVICES
        </h4>
      </div>
      <div className="px-10 lg:px-20 flex justify-center">
        <div className="max-w-screen-xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row gap-6">
          {cardData.map((card, index) => (
            <Card index={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
