# THINKMILL Skill Assessment

👤 **Irwin Razaghi**

* Website: razaghi.com.au
* Github: [@irwin-r](https://github.com/irwin-r)
* LinkedIn: [@irwinrazaghi](https://linkedin.com/in/irwinrazaghi)

## Install

```sh
yarn
```

## Run Locally

```sh
yarn start:local
```


## Notes

- ***What are your thoughts on this app?***

  This was probably the most time consuming tech test I've ever done.
  Given that there's another tech test with Atlassian, if I'm successful, my main thoughts are "I *really* hope this is well-received" 😛
  
- ***What were the difficulties you ran into?***

  `@apollo/react-hooks` is a relatively new library and when combined with SSR, there are multiple poorly-documented gotchas.
  
- ***What would you improve given more time?***

  Good question.  Given more time, the main things that come to mind are:
  * Break up the querying of data more;  better utilise fragments and not over-fetch data until required.
  * Break up the Apollo Server's schema more
  * I'm a big fan of TDD and given more time, I would've loved to write some tests
  * Look into serving the Apollo Server using Next.js' API routes
  
- ***What would be the next steps?***

  In the context of this technical test?
  * Tests!
  * There's an outstanding bug where the job page will render the lorem text twice.
  * CI/CD, although ZEIT Now kind of makes this trivial.
  * Leverage a proper persistence layer?
  * i18n
  
- ***How long did it take you?***
  
  On and off, maybe a day and a half?

- ***How could this skill assessment be made better?***

  The initially provided code is a bit messy, things are imported that don't need to be, modern React features aren't used, Next.js' dynamic routes features aren't used, etc.
  
  I don't have any specific ideas, but anything to make the test more concise and less time-consuming would also be very welcome.
  
  