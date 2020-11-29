using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjHomeA.Soul.Pages
{
    public partial class verReclama : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataBase Banco = new DataBase();
            string Condominio = Request["c"];
            if (Condominio == "" || Condominio == null)
            {
                return;

            }

            Banco.openBar("localhost", "root", "root", "HomeA");

            Banco.getCommand("SELECT * FROM Aviso_Reclamacao WHERE cd_condominio = " + Condominio);
            string Giorno = "";
            while (Banco.Selected.Read())
            {
                if (Banco.Selected["cd_tipo_Aviso_Reclamacao"].ToString() == "1")
                {
                    Giorno += Banco.Selected["ds_Aviso_Reclamacao"] + "☺";

                }

            }
            Banco.Refresh();
            Response.Write(Giorno);

        }
    }
}