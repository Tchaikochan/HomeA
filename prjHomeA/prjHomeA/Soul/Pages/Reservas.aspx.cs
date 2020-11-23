using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjHomeA.Soul.Pages
{
    public partial class Reservas : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataBase Banco = new DataBase();
            bool isRunning = bool.Parse(Request["checker"]);
            string Condominio = Request["c"].ToString();
            if (Condominio == "" || Condominio == null)
            {
                return;

            }
            if (isRunning)
            {
               

                string Return = "";
                Banco.openBar("localhost", "root", "root", "HomeA");
                Banco.getCommand("SELECT * FROM Area_Lazer");
                while (Banco.Selected.Read())
                {
                    if (Condominio == Banco.Selected["cd_condominio"].ToString())
                    {
                        Return += Banco.Selected["nm_area_lazer"].ToString() + "$" + Banco.Selected["cd_area_lazer"].ToString() + "#";

                    }

                }
                Banco.Refresh();
                Response.Write(Return);

            }
            else
            {
                string Return = "";
                Banco.openBar("localhost", "root", "root", "HomeA");
                Banco.getCommand("SELECT dt_Reserva, hr_Reserva, nm_Usuario, U.cd_apartemanto, nm_area_lazer from Reserva_Area_Lazer R join Usuario U on (U.cd_apartemanto = R.cd_apartemanto) join Area_Lazer A on (R.cd_area_lazer = A.cd_area_lazer) where U.cd_condominio = " + Condominio);
                while (Banco.Selected.Read())
                {
                    Return += Banco.Selected["nm_area_lazer"].ToString() + "$" + Banco.Selected["dt_reserva"] + "#" + Banco.Selected["hr_reserva"] + "☺" + Banco.Selected["nm_usuario"] + "☻" + Banco.Selected["cd_apartemanto"];
 
                }
               
            }


        }
    }
}