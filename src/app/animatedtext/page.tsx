"use client";
import { useEffect, useState } from "react";
const FADE_INTERVAL_MS = 2000;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;
const WORDS_TO_ANIMATE = [
  "Use strong passwords: Create passwords that are at least 12 characters long and include a mix of uppercase letters, lowercase letters, numbers, and special characters.",
  "Avoid common words and patterns: Do not use easily guessable information like 'password', '123456', or your name/birthday.",
  "Use a unique password for each account: Never reuse passwords across multiple sites or services to minimize the risk if one account is compromised.",
  "Enable multi-factor authentication (MFA): Add an extra layer of security by requiring a second form of verification, such as a text message or authentication app.",
  "Change passwords regularly: Update passwords periodically, especially for sensitive accounts or after a security breach.",
  "Use a password manager: Store and manage complex passwords securely with a reputable password manager.",
  "Avoid saving passwords in your browser: Browser-stored passwords can be vulnerable to malware and unauthorized access.",
  "Be cautious with password reset options: Ensure your recovery email and security questions are secure and not easily guessable.",
  "Monitor accounts for suspicious activity: Regularly check for unusual logins or activity and update your password immediately if anything seems off.",
  "Educate users on phishing attacks: Be aware of and avoid phishing scams that trick you into revealing your password.",
  "Use passphrases instead of single words: Create passwords using a sequence of words or a sentence that's easy to remember but hard to guess.",
  "Avoid using personal information: Do not include personal details like your name, birthdate, or address in your passwords.",
  "Avoid dictionary words: Refrain from using common dictionary words that can be easily cracked by password-guessing tools.",
  "Include a mix of character types: Use a combination of uppercase letters, lowercase letters, numbers, and special symbols.",
  "Avoid sequential characters: Do not use sequences like '1234' or 'abcd' in your passwords.",
  "Avoid repeated characters: Refrain from using repeated characters like 'aaaa' or '1111'.",
  "Use random combinations: Generate passwords with random combinations of characters to increase complexity.",
  "Do not write down passwords: Avoid writing passwords on paper or storing them in unsecured digital files.",
  "Do not share passwords: Keep your passwords confidential and do not share them with others.",
  "Use different passwords for work and personal accounts: Separate your professional and personal digital identities by using distinct passwords.",
  "Regularly audit your passwords: Periodically review and update your passwords to maintain security.",
  "Use security questions wisely: Choose security questions and answers that are not easily guessable or publicly available.",
  "Be cautious of public Wi-Fi: Avoid logging into sensitive accounts over unsecured public Wi-Fi networks.",
  "Log out after sessions: Always log out from accounts when you're done, especially on shared or public devices.",
  "Use biometric authentication when available: Enhance security by enabling fingerprint or facial recognition features.",
  "Keep your devices secure: Ensure your devices are protected with passwords or PINs to prevent unauthorized access.",
  "Update software regularly: Keep your operating systems and applications up to date to patch security vulnerabilities.",
  "Be wary of phishing emails: Do not click on suspicious links or provide credentials in response to unsolicited emails.",
  "Use encrypted connections: Ensure websites use HTTPS to secure data transmission.",
  "Avoid using the same password across multiple accounts: Using unique passwords for each account prevents a breach in one from compromising others.",
  "Use password generators: Utilize tools to create strong, random passwords.",
  "Avoid using keyboard patterns: Do not use predictable patterns like 'qwerty' or 'asdfgh' in your passwords.",
  "Test your passwords: Use password strength checkers to evaluate the robustness of your passwords.",
  "Be cautious of shoulder surfing: Ensure no one is watching when you enter your passwords in public places.",
  "Secure your password manager: Protect your password manager with a strong master password and enable MFA.",
  "Do not use default passwords: Always change default passwords on devices and applications.",
  "Regularly back up your data: Maintain backups to recover information in case of a security breach.",
  "Educate yourself on security best practices: Stay informed about the latest security threats and how to protect against them.",
  "Use security software: Install antivirus and anti-malware programs to protect your devices.",
  "Avoid clicking on unknown links: Do not click on links from unknown or untrusted sources.",
  "Be cautious with email attachments: Do not open attachments from unknown senders.",
  "Regularly monitor your accounts: Check your accounts for unauthorized access or unusual activity.",
];
// import data from "../data/data.json";

// const password_security_best_practices_SAMPLE = data.password_security_best_practices;

export default function AnimatedText() {
  // const [facts, setFacts] = useState(password_security_best_practices_SAMPLE);
  const [fadeProp, setFadeProp] = useState("fadeout");
  const [wordOrder, setWordOrder] = useState(0);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      if (fadeProp === "fadein") {
        setFadeProp("fadeout");
      } else {
        setFadeProp("fadein");
      }
    }, FADE_INTERVAL_MS);
    return () => clearInterval(fadeTimeout);
  }, [fadeProp]);

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder(
        (prevWordOrder: number) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length
      );
    }, WORD_CHANGE_INTERVAL_MS);
    return () => clearInterval(wordTimeout);
  }, []);

  // useEffect(() => {
  //   //console.log("Facts component mounted");
  //   for(let i = 0; i < facts.length; i++) {
  //     const f = facts[i];
  //     //console.log(f);

  //   }
  //   // facts.forEach((f) => {
  //   //   console.log(f);
  //   //   facts.push(f);
  //   //   setInterval(() => {
  //   //     console.log(f.practice);
  //   //   },5000)
  //   // })
  // }, []);

  // useEffect(() => {
  //   const randomIndex = Math.floor(Math.random() * facts.length);
  //   const randomFact = facts[randomIndex];
  //   setFacts([randomFact]);
  //   setInterval(() => {
  //     const randomIndex = Math.floor(Math.random() * facts.length);
  //     const randomFact = facts[randomIndex];
  //     setFacts([randomFact]);
  //   }
  //   , 5000); // Change fact every 5 seconds
  // }, [facts]);

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <div>
        <h2>
          <span>{WORDS_TO_ANIMATE[wordOrder]}</span>
        </h2>
        {/* <p>Use strong passwords</p>
        <small>Create passwords that are at least 12 characters long and include a mix of uppercase letters, lowercase letters, numbers, and special characters.</small> */}
      </div>
    </footer>
  );
}
