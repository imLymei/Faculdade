using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Program
    {
        static int fatorial(int num)
        {
            int fat = 1;

            for(int i = num; i > 0; i--){
                fat *= i;
            }

            return fat;
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Digite um número para o calculo de fatorial:");
            int num = int.Parse(Console.ReadLine());
            Console.WriteLine($"O fatorial de {num} é igual a {fatorial(num)}.");
            Console.ReadKey();
        }
    }
}
