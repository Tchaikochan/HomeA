using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjHomeA.Soul.Pages
{
    public partial class reservar : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string DatingSim = Request["d"].ToString();
            if (DatingSim == "" || DatingSim == null)
            {
                return;

            }
            string Dating = DatingSim.Substring(0, 10).Replace("-","/"); 
            string Time = DatingSim.Substring(10).Replace("T","");

            string WhoChecked = Request["w"].ToString();
            if (WhoChecked == "" || WhoChecked == null)
            {
                return;

            }
            string[] Result;
            Result = WhoChecked.Split('$');
            string Apartamento = Request["a"].ToString();
            if (Apartamento == "" || Apartamento == null)
            {
                return;

            }
            string Bloco = Request["b"].ToString();
            if (Bloco == "" || Bloco == null)
            {
                return;

            }


            DataBase Banco = new DataBase();
            for (int i = 0; i < Result.Length - 1; i++)
            {
                Banco.openBar("localhost", "root", "root", "HomeA");
                Banco.setCommand("INSERT INTO Reserva_Area_Lazer VALUES (DATE_FORMAT('" + Dating + "','%Y/%m/%d'),TIME_FORMAT('" + Time + ":00','%h:%i:%s')," + Result[i] + "," + Apartamento + "," + Bloco + ")");
                Banco.Refresh();

            }

        }
    }
}