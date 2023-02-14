using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    internal class Program
    {
        static float CalcularVolumeCilindro(float raio, float altura)
        { 
            return ((float)Math.PI *(float)Math.Pow(raio,2)*altura);
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Digite o raio do cilindro");
            float raio = float.Parse(Console.ReadLine());
            Console.WriteLine("Digite a altura do cilindro");
            float altura = float.Parse(Console.ReadLine());
            Console.WriteLine($"O volume do cilindro é igual a {CalcularVolumeCilindro(raio,altura)}");
            Console.ReadKey();
        }
    }
}
