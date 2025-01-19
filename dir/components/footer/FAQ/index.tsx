'use client'



import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";


export function FAQDialog() {
  return (
    <Dialog>
      <DialogTitle className="hidden">
          FAQ
      </DialogTitle>
      <DialogTrigger asChild>
          <div className="px-2.5 border-r footer-border justify-center items-start flex">
          <div className="footer-text text-center text-xs font-normal leading-none">
              FAQ
          </div>
          </div>
      </DialogTrigger>
      <DialogContent 
        className="w-4/5 h-3/4 p-4 bg-[#191d25] rounded-2xl border-2 border-[#ffa31a] flex-col justify-start items-center gap-1 inline-flex overflow-auto"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader className="self-stretch p-1 justify-end items-end gap-2.5 inline-flex">
          <DialogClose asChild>
            <X className="text-white hover:text-[#ffa31a] items-end cursor-pointer"/>
          </DialogClose>
        </DialogHeader>
        <div className="self-stretch h-full px-4 pb-2 flex-col justify-start items-center gap-8 flex overflow-hidden">
          <div className="py-1 border-b-2 border-white justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-[20px] font-bold">FAQ</div>
          </div>
          <Accordion type="single" collapsible className="self-stretch custom-scrollbar flex-1 flex-col justify-start items-start gap-6 flex overflow-y-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Casino?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Casino is a decentralized gambling platform built on blockchain technology, providing a secure, transparent, and trustless gambling experience. With smart contracts and blockchain, players can enjoy fair and verifiable games without the need for intermediaries.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does Casino work?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Casino uses blockchain technology to ensure that all transactions and game outcomes are transparent and secure. When you place a bet, a smart contract automatically executes the terms of the wager, guaranteeing fair results and eliminating any chance of manipulation.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is Casino secure?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes, Casino is highly secure. Blockchain technology provides a decentralized ledger that prevents tampering, fraud, and unauthorized access. Smart contracts ensure that all outcomes are executed exactly as programmed, offering a trustless and verifiable gaming environment.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What types of games are available on Casino?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Casino offers a wide range of games including:
                  <ul>
                    <li>Slots</li>
                    <li>Poker</li>
                    <li>Roulette</li>
                    <li>Sports betting</li>
                    <li>Lottery</li>
                    <li>And more! New games are continuously added to enhance the user experience.</li>
                  </ul>
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How can I create an account on Casino?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Creating an account on Casino is simple:
                  <ol>
                    <li>Visit [Casino URL].</li>
                    <li>Connect your wallet (such as MetaMask, Trust Wallet, etc.).</li>
                    <li>Follow the easy onboarding process to set up your account.</li>
                  </ol>
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>What cryptocurrencies are supported?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Casino supports a variety of cryptocurrencies, including:
                  <ul>
                    <li>Ethereum (ETH)</li>
                    <li>Bitcoin (BTC)</li>
                    <li>Binance Coin (BNB)</li>
                    <li>Other major tokens</li>
                  </ul>
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>How do I deposit funds?</AccordionTrigger>
              <AccordionContent>
                <p>
                  To deposit funds:
                  <ol>
                    <li>Connect your crypto wallet to Casino.</li>
                    <li>Choose your preferred cryptocurrency.</li>
                    <li>Enter the amount and confirm the transaction.</li>
                  </ol>
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>Are my funds safe?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes, your funds are safe with Casino. They are stored securely in your personal crypto wallet, ensuring full control and protection. Casino does not store your private keys, preventing unauthorized access or theft.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </DialogContent>
    </Dialog>
  );
}
